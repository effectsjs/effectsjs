const typeDestructure = () => {
    'use effects';
    try{
        return perform {type : 'sayHi'};
    }handle 'sayHi' with (e){
        recall 'Hello :)'
    }
};

const propDestructure = (mutableThing) => {
    'use effects';
    try{
        mutableThing += perform {type : 'addOne', data : mutableThing};
        mutableThing += perform {type : 'addTwo', data : mutableThing};

        return mutableThing;
    }handle 'addOne' with ({data}) {
        recall(data + 1);
    }handle 'addTwo' with ({data}) {
        recall(data + 2);
    }
};

const deepPropDestructuring = (propValue) => {
    'use effects'
    try{
        return perform {
            type : 'a',
            payload : {
                a : {
                    b : propValue
                }
            }
        }
    }handle 'a' with ({payload : {a : { b }}}){
        recall b
    }
};

const restDestructure = () => {
  'use effects'
  try{
      return perform {type : 'example', data1 : 'example 1 data 1', data2 : 'example 1 data 2'}
  } handle 'example' with ({...data}){
      const {data1, data2} = data;
      recall [data1, data2];
  }
};

const defaultAssignments = () => {
    'use effects';
    try{
        return perform {type : 'getDefault'};
    }handle 'getDefault' with ({data = "default"}){
        recall data;
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

        it('Should destructure deep props from performed effects', async () => {
            const expectedResult = 'such deep prop very wow';
            const result = await deepPropDestructuring(expectedResult);

            expect(result).toBe(expectedResult);

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
    });
};