import {Boundary} from "effects-common";
import {
    stackResume,
    runProgram,
    performEffect,
    withHandler,
    UnhandledEffectError,
    DefaultEffectHandler
} from "../../src/runtime";
import { Handler } from "effects-common";
import {
    getHandler,
    addHandler,
    addReturn,
    setRootContinuation
} from "effects-common/lib/StackFrame";

describe('Effects Boundaries', () => {
    it('Should evaluate a stackframe from within a boundary', async () => {
        const handler : Handler = {
            *[DefaultEffectHandler]({data}, resume){
                yield resume(data * 2);
            }
        };

        async function* main(data : any){
            return await Promise.all(
                [2,4,6].map(
                    rootBoundary( function* (data) {
                        return yield performEffect({type : '', data})
                    } as any)
                )
            );
        }

        const program = withHandler(handler, main(1));
        const rootBoundary = Boundary.call({stackResume}, program);

        const result = await runProgram(program);

        expect(result).toEqual([4,8,12]);
    });
});