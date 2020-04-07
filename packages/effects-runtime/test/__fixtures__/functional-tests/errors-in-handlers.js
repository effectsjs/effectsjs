const ejectType = 'throwErrorHandler';
const EjectEffect = () => ({type : ejectType});


const syncEject = () => {
    throw new Error('eject');
};

const asyncEject = async () => {
    await new Promise((res) => {
        setTimeout(res, 10)
    });

    throw new Error('eject');
};

const syncEjectCase = () => {
    'use effects';
    try{
        perform EjectEffect();
    }handle ejectType with (e){
        syncEject();
    }
};

const asyncEjectCase = async () => {
    'use effects';
    try{
        perform EjectEffect();
    }handle ejectType with (e){
        await asyncEject();
    }
};

module.exports.test = async ({it, expect}) => {
    it('Should handle errors as expected when effect handlers throw', async() => {
        await expect(syncEjectCase()).rejects.toThrowError('eject');
    });

    it('Should handle errors as expected when effect handlers are async and throw', async () => {
        await expect(asyncEjectCase()).rejects.toThrowError('eject');
    });
};