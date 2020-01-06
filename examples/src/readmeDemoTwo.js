require('../../lib/prelude-polyfill');

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

const asyncHandler = async () => {
    const start = Date.now();
    await sleep(1500);
    recall ({start, end : Date.now()});
};

const main = () => {
    console.log('main start');
    const performResult = perform ({type : 'sleepHandler'});
    console.log(performResult);
    console.log('main end');
};


try{
    main();
}handle (e){
    if(e.type === 'sleepHandler'){
        asyncHandler()
    }
}

