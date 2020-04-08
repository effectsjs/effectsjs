require('../../lib/prelude-polyfill');

const timesTwoHandler = (number) => {
    recall (number * 2)
};

const main = () => {
    const result = perform ({type : 'timesTwo', number : 5});
    console.log(result);
};

'use effects';
try{
    main();
} handle default with (e){
    if(e.type === 'timesTwo'){
        timesTwoHandler(e.number);
    }
}
