const {Boundary} = require('effects-common');

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


module.exports.test = ({it, expect, code}) => {
  it.only('Should produce expected results', async () => {
      await expect(root()).resolves.toEqual([4,8,12]);
  })
};