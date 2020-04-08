const getIntegerHandler = 'getInteger';

const GetIntegerEffect = () => ({type : getIntegerHandler});

const main = async () => {
    'use effects';
    try{
        const integer = perform GetIntegerEffect();

        return integer
    }handle getIntegerHandler with (e){
        recall 5;
    }
}

module.exports.test = ({it, expect, code}) => {
    it("Should compile, and return expected results", async () => {
        const result = await main();

        expect(result).toBe(5);
    })
};


