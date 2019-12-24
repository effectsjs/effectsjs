require('../../lib/prelude-polyfill');

try{
    const result = performEffect ({type : 'effect'});
    console.log(result);
} handle (e) {
    if(e.type === 'effect'){
        recall "Effect Result";
    }
}
