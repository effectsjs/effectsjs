import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import '@babel/polyfill';
import 'effects-runtime/lib/prelude-polyfill';

const rootEl = document.getElementById('app');

const main = () => {
    'use effects';
    try{
        const a = perform {};
        console.log(`\n\n\n\n${a}\n\n\n\n`)
        render(<App />, rootEl);
    }handle default with(e){
        recall 'it works!'
    }

};

main();

if (module.hot) {
    module.hot.accept();
}