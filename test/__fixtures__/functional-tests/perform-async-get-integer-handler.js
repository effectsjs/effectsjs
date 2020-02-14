const getAsyncIntegerHandler = 'getAsyncInteger';

const GetAsyncIntegerEffect = () => ({type : getAsyncIntegerHandler});

const expectation = 5;

const main = ({onEffectComplete}) => {
    'use effects';
    try{
        const result = perform GetAsyncIntegerEffect();

        onEffectComplete(result);
    }handle(e){
        if(e.type === getAsyncIntegerHandler){
            setTimeout(() => {
                recall expectation;
            }, 50)
        }
    }
};

module.exports = {
    main,
    expectation
};