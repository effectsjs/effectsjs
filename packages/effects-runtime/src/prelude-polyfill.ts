import {
  stackResume,
  withHandler,
  runProgram,
  performEffect,
  DefaultEffectHandler
} from "./runtime";

// @ts-ignore
global.stackResume = stackResume;
// @ts-ignore
global.withHandler = withHandler;
// @ts-ignore
global.runProgram = runProgram;
// @ts-ignore
global.performEffect = performEffect;
// @ts-ignore
global.__defaultEffectHandler__ = DefaultEffectHandler;
