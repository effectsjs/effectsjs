const getIntegerHandler = 'getInteger';

const GetIntegerEffect = () => ({type : getIntegerHandler});

const expectation = 5;

const main = async () => {
    'use effects';
    try{
        return await asyncChild();
    }handle getIntegerHandler with (e){
        recall expectation;
    }
};

const asyncChild = async () => {
    const a = perform GetIntegerEffect();
    const result = await Promise.resolve(a);

    return result;
};


module.exports.test = ({it, expect, code}) => {
  it('Should compile, and return expected results with an async effect handler', async () => {
      const result = await main();
      expect(result).toBe(expectation)
  })
};