const typeDestructure = () => {
    'use effects';
    try{
        return perform {type : 'sayHi'};
    }handle({type}){
        if(type === 'sayHi'){
            recall 'Hello :)'
        }
    }
};

const propDestructure = (mutableThing) => {
    'use effects';
    try{
        mutableThing += perform {type : 'addOne', data : mutableThing};
        mutableThing += perform {type : 'addTwo', data : mutableThing};

        return mutableThing;
    }handle({type, data}){
        switch(type){
            case 'addOne' : return recall (data + 1);
            case 'addTwo' : return recall (data + 2);
        }
    }
};

const restDestructure = () => {
  'use effects'
  try{
      return perform {type : 'example', data1 : 'example 1 data 1', data2 : 'example 1 data 2'}
  } handle({type, ...data}){
      switch (type) {
          case 'example': {
              const {data1, data2} = data;
              return recall [data1, data2];
          }
      }
  }
};

const defaultAssignments = () => {
    'use effects';
    try{
        return perform {type : 'getDefault'};
    }handle({type, data = "default"}){
        if(type === 'getDefault'){
            recall data;
        }
    }
};

const defaultEffectTypes = () => {
  'use effects';

  try{
      return perform {data : "keanu: woah!"}
  }handle({type = 'default', data}){
      if(type === 'default'){
          recall null;
      }
  }
};

module.exports.test = ({it, expect, describe, code}) => {
    describe('Destructuring effects handlers', () => {
        it('Should destructure effect types in handle block', async () => {
            const result = await typeDestructure();

            expect(result).toBe('Hello :)');
        });

        it('Should destructure props from performed effects', async () => {
           const result = await propDestructure(0);
           expect(result).toBe(4);
        });

        it('Should handle rest props correctly during the destructure', async () =>{
            const [data1, data2] = await restDestructure();

            expect(data1).toBe('example 1 data 1');
            expect(data2).toBe('example 1 data 2');
        });

        it('Should handle default destructure props', async () => {
            const result = await defaultAssignments()

            expect(result).toBe('default');
        });

        // TODO: this seems desireable... Underlying runtime will need to be altered in order to make it a possibility.
        it.skip('Should handle default types', async () => {
            const result = await defaultEffectTypes()

            expect(result).toBe('keanu: woah!');
        });
    });
};