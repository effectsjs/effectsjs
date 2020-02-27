const symbolHandler = Symbol();
const {computedHandler} = {};

const main = async (fn) => {
    try{
        return fn();
    }handle({type}){
        switch(type){
            case symbolHandler : recall 'symbol';
            case computedHandler : recall 'computed';
        }
    }
};

const performSymbolHandler = async () => {
    'use effects';
    main(() => {
        return perform {type : symbolHandler}
    });
};

const performComputedHandler = async () => {
    'use effects';
    main(() => {
        return perform {type : computedHandler}
    })
};

const locallyScopedEffects = async () => {
  'use effects';
  const something = 'something';
  try{
      return perform {type : something};
  }handle({type}){
      switch(type){
          case something: return recall something;
      }
  }
};

module.exports.test = ({describe, it, code, expect}) => {
    describe(`Computed props for effects handlers`, () => {
        it('Should behave as expected when performing a symbol handler', async () => {
            await expect(performSymbolHandler()).resolves.toBe('symbol');
        });

        it('Should behave as expected when performing a computed handler', async () => {
            await expect(performComputedHandler()).resolves.toBe('computed');
        });

        it('Should handle locally scoped effect types', async () => {
            await expect(locallyScopedEffects()).resolves.toBe('something');
        })
    });
};