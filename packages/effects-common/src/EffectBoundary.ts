import {
    addReturn,
    Continuation,
    getReturnFrame,
    StackFrame,
} from "./StackFrame";
import {exists, isContinuation, isGeneratorFactory, isIterator} from "./util";
import {BoundaryError} from "./Boundary";

type Thenable = (...args: any[]) => Promise<any>;
type IsolatedContinuation = Continuation |( (...args: any[]) => StackFrame | Continuation)

const validateIC = (ic : IsolatedContinuation) => (
    isContinuation(ic) || isGeneratorFactory(ic)
);

// Importing stackResume directly causes some circular dependency nonsense.
//  If this is being used in transpiled user-land, then the prelude-polyfill is a requirement.
const getStackResumeFromContext = (ctx: any): Thenable => {
    const stackResume = global.stackResume ?? ctx["stackResume"];

    if (!exists(stackResume)) {
        throw new BoundaryError(
            `Missing stackResume from context. Are you using Boundary without the Effects prelude-polyfill?`
        );
    }

    return stackResume;
};

export function EffectBoundary(ic : IsolatedContinuation) {
    const inner = (...args : any[]) => {
        if(!validateIC(ic)){
            throw new Error('aight bet')
        }

        const unlink = () => addReturn(temporalFrame, null);
        const stackResume = getStackResumeFromContext(EffectBoundary);
        const temporalFrame : StackFrame = (function*(){
            const frameFactory = isContinuation(ic)
                ? function* (...args: any[]) {
                    return yield ic(...args);
                }
                : ic;

            yield frameFactory(...args);
            unlink();
        })();

        addReturn(temporalFrame, getReturnFrame(inner));

        return stackResume(temporalFrame);
    };

    // @ts-ignore
    inner.next = () => ({
        value : inner,
        done : Boolean(getReturnFrame(inner))
    });

    return inner;
}
