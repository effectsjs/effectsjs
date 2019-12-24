require('../../lib/prelude-polyfill');

const sleep = (ms) => new Promise(res => setTimeout(res, ms));
const asyncHandler = async () => {
    await sleep(1500);
    recall null;
};
const main = () => {
    console.log('start');
    performEffect ({type : 'sleepHandler'});
    console.log('end');
}


try{
    main();
}handle (e){
    if(e.type === 'sleepHandler'){
        asyncHandler()
    }
}
