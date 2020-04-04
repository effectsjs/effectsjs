require('../../lib/prelude-polyfill');

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

const asyncHandler = async () => {
  const start = Date.now();
  console.log('😴  sleeping');
  await sleep(1500);
  recall ({start, end : Date.now()});
};

const main = () => {
  console.log('main start');
  const performResult = perform ({type : 'sleepHandler'});
  console.log(performResult);
  console.log('main end');
};


'use effects';
try{
  main();
}handle 'sleepHandler' with (e){
  asyncHandler()
}

