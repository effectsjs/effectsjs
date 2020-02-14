const getIntegerHandler = 'getInteger';

const GetIntegerEffect = () => ({type : getIntegerHandler});

const main = () => new Promise((res) => {
    'use effects';
    try{
        const integer = perform GetIntegerEffect();

        res(integer);
    }handle(e){
        if(e.type === getIntegerHandler){
            recall 5;
        }
    }
});

module.exports.test = ({it, expect, code}) => {
    it("Should compile, and return expected results", async () => {
        const result = await main();

        expect(result).toBe(5);
    })
};


