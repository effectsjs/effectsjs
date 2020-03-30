const {Boundary} = require('effects-common');

let boundary = null;

const child = (number) => {
    return perform {type : 'double', input : number}
};

const root = () => {
    try{
        child();
    } handle 'double' with ({input}) {
        return input * 2;
    }
};

const main = () => {
    'use effects';
    const program = root();
    boundary = Boundary(program);
};


module.exports.test = ({it, expect, code}) => {
  it.only('Should do', () => {
      console.log(Boundary, code);
  })
};