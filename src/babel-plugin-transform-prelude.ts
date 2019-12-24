import {Babel, Plugin} from "./babel-plugin-transform-effects";
const parser = require("../babel/packages/babel-parser/lib");

const header = "const {runProgram, perform, stackResume, withHandler} = require('../../lib/index');"

export default function injectPrelude({types} : Babel) {
    return {

        visitor: {
            Program: {
                enter: function(path) {
                    // @ts-ignore
                    if(path?.node.body){
                        path?.node?.body.unshift(
                            parser.parse(header).program.body[0]
                        );
                    }
                },
            },
        },
    }
}