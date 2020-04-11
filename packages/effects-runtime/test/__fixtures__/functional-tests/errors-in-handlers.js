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

const catchingEject = async () => {
    'use effects';
    try{

        try{
            try{
                perform {type : 'innerPerform'}
            }handle default with (e){
                syncEject();
            }

        }catch(e){
            console.log('catching');
            return perform {type : 'outerPerform'}
        }


    }handle default with (e){
        recall 'outer perform!';
    }
};

const bubblingEffect = async () => {
  'use effects';
  try{

      try{

          try{

              try{

                  try{
                      return perform { type : 'inner_effect'}
                  } handle 'inner_effect' with (e){
                      throw 1;
                  }

              } catch (e) {
                  perform {type : 'middle_effect', e}
              }
          } handle 'middle_effect' with ({e}){
              throw e + 1
          }
      }catch(e){
          return perform {type : 'outer_effect', e}
      }
  }handle 'outer_effect' with ({e}){
      recall (e + 1)
  }
};

module.exports.test = async ({it, expect}) => {
    it('Should handle errors as expected when effect handlers throw', async() => {
        await expect(syncEjectCase()).rejects.toThrowError('eject');
    });

    it('Should handle errors as expected when effect handlers are async and throw', async () => {
        await expect(asyncEjectCase()).rejects.toThrowError('eject');
    });

    it('Should recover from an error, return the result of a perform', async () => {
        await expect(catchingEject()).resolves.toBe('outer perform!');
    });

    it('Should catch and bubble up through virtual stack frames', async () => {
       await expect(bubblingEffect()).resolves.toBe(3);
    });
};