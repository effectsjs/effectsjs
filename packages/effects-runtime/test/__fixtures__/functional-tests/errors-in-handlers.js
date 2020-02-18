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

const continuationEject = () => {
    setTimeout(() => {
        throw new Error('eject');
    }, 10);
};

const syncEjectCase = () => {
    'use effects';
    try{
        perform EjectEffect();
    }handle(e){
        if(e.type === ejectType){
            syncEject();
        }
    }
};

const asyncEjectCase = async () => {
    'use effects';
    try{
        perform EjectEffect();
    }handle(e){
        if(e.type === ejectType){
            await asyncEject();
        }
    }
};

const continuationEjectCase = () => {
  'use effects';
  try{

  }handle(e){
      if(e.type === ejectType){
          continuationEject();
      }
  }
};

module.exports.test = async ({it, expect, code}) => {
    it('Should handle errors as expected when effect handlers throw', async() => {
        await expect(syncEjectCase()).rejects.toThrowError('eject');
    });

    it('Should handle errors as expected when effect handlers are async and throw', async () => {
        await expect(asyncEjectCase()).rejects.toThrowError('eject');
    });

    it.skip('Should handle errors as expected when effect handlers are async and throw', async () => {
        await expect(continuationEjectCase()).rejects.toThrowError('eject');
    });
};