const gatherBananasEffectType = 'throwErrorHandler';
const GatherBananasEffect = () => ({type : gatherBananasEffectType});


const gatherBananasHandler = async () => {
    setTimeout(() => {
        recall "A Bunch Of Bananas";
    }, 1)
};

const main = async () => {
    'use effects';
    try{
        const someBananas = perform GatherBananasEffect();
        if(someBananas === 'A Bunch Of Bananas'){
            throw new Error('I wanted Plantains!');
        }
    }handle(e){
        if(e.type === gatherBananasEffectType){
            gatherBananasHandler();
        }
    }

};

module.exports.test = async ({it, expect, code}) => {
    it('Should handle errors within effects', async () => {
        console.log(code);
        await expect(main()).rejects.toThrowError('I wanted Plantains!');
    })
};