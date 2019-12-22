import {Continuation} from "../StackFrame";

export type HandlerDefinition = (data : any, resume : Continuation) => Generator<any, any, any>;

export interface Handler {
    [key : string] :  HandlerDefinition
    [index : number] :  HandlerDefinition
}


export interface Effect{
    type : string|number,
    data? : any
}