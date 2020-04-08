const getAsyncIntegerHandler = 'getAsyncInteger';

const GetAsyncIntegerEffect = () => ({type : getAsyncIntegerHandler});

const expectation = 5;

const main = ({onEffectComplete}) => {
    'use effects';
    try{
        const result = perform GetAsyncIntegerEffect();

        onEffectComplete(result);
    }handle getAsyncIntegerHandler with (e){
        setTimeout(() => {
            recall expectation;
        }, 50)
    }
};

module.exports = {
    main,
    expectation
};