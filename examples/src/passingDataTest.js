require('../../lib/prelude-polyfill');

const timesTwoHandler = ({number}) => {
    recall (number * 2)
};

const main = () => {
    const result = perform ({type : 'timesTwo', number : 5});
    console.log(result);
};

try{
    main();
} handle (e){
    if(e.type === 'timesTwo'){
        timesTwoHandler(e);
    }
}