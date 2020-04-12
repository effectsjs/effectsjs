const {Boundary} = require('effects-common');


const programOne = () => {
    const boundary = new Boundary();
    const root = async () => {
        'use effects';
        try{
            boundary.withContext();
            return Promise.all([2, 4, 6].map(
                boundary.into((x) => {
                    return perform {type : 'double', input : x}
                })
            ));
        } handle 'double' with ({input}) {
            recall (input * 2);
        }
    };

    return root();
};

const programTwo = () => {

    const boundary = new Boundary();

    // Notice: entry is _not_ performing top-level
    const entry = async () => {
        return boundary.into(() => {
            return perform { type : 'any', data : 10}
        });
    };

    const root = async () => {
      'use effects';
      try{
          boundary.withContext();
          return entry();
      }handle default with ({data}){
          recall `Performed an effect with data: ${data}`;
      }
    };

    return root();
};


const programThree = async () => {
    const boundary = new Boundary();

    const entry = async () => {
        return Promise.all(
            [4, 6, 8].map(
                boundary.into(x => {
                    return perform { type : 'doubleInt', int : x }
                })
            )
        )
    };

    const root = () => {
        'use effects';
        try{
            boundary.withContext();
            return 'complete';
        }handle 'doubleInt' with ({int}){
            recall (int * 2)
        }
    };

    const rootResult = await root();
    const entryResult = await entry();

    return [rootResult, entryResult];
};


module.exports.test = ({it, expect, describe, code}) => {
    describe.only('Boundary functional tests', () => {
        it('Should produce expected results from a functional interface', async () => {
            await expect(programOne()).resolves.toEqual([4,8,12]);
        });

        it('Should produce expected results at the edges of the virtual stack', async () => {
            await expect(programTwo()).resolves.toBe(`Performed an effect with data: 10`);
        });

        it('Should produce expected results when accessing the boundary after the virtual stack has been evaluated', async () => {
            await expect(programThree()).resolves.toEqual(['complete', [8, 12, 16]])
        });
    });
};