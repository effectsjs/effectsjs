require('../../lib/prelude-polyfill');

'use effects'
try{
    const result = perform ({type : 'effect'});
    console.log(result);
} handle (e) {
    if(e.type === 'effect'){
        recall "Effect Result";
    }
}
