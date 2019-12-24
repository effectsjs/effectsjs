import {stackResume, withHandler, runProgram, performEffect} from "./index";

// @ts-ignore
global.stackResume = stackResume;
// @ts-ignore
global.withHandler = withHandler;
// @ts-ignore
global.runProgram = runProgram;
// @ts-ignore
global.performEffect = performEffect;