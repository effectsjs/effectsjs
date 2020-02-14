const throwErrorHandler = 'throwErrorHandler';

const ThrowErrorEffect = () => ({type : throwErrorHandler});

const main = () => {
    'use effects';
    try{
        perform ThrowErrorEffect();
    }handle(e){
        if(e.type === throwErrorHandler){
            throw new Error('I am an error')
        }
    }

};

module.exports.test = async ({describe, it, expect}) => {
    it('Should handle errors within effects', async () => {
        await expect(main()).rejects.toThrowError();
    })
};