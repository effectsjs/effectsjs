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
        const boundary = new Boundary();
        Reflect.set(boundary, 'stackResume', stackResume);
        const handler : Handler = {
            *[DefaultEffectHandler]({data}, resume){
                yield resume(data * 2);
            }
        };

        async function* main(){
            yield boundary.initialize();
            const result =  yield Promise.all(
                [2,4,6].map(
                    boundary.execute( function* (data) {
                        return yield performEffect({type : '', data})
                    } as any)
                )
            );

            return result;
        }

        const program = function*() {
            return yield withHandler(handler, main());
        };
        const result = await runProgram(program());

        expect(result).toEqual([4,8,12]);
    });
});