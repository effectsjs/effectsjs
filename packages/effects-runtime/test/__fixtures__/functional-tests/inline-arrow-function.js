const performAThing = (type, props) => perform {type, ...props};

const recallAThing = (dataToRecall) => recall dataToRecall;

const inlineChildMethod = () => performAThing('childPerform', {data : 'performed from child'});

const root = (e, data) => {
    'use effects'
    try{
        if(typeof e === 'undefined'){
            return inlineChildMethod();
        }

        return performAThing(e, {data});

    }handle e with ({data}){
        if(data === 'functionalRecall') return recallAThing(data);

        recall data
    }handle 'childPerform' with (e){
        recall e;
    }
};

const main = async (e, data) => root(e, data);



module.exports.test = ({it, expect, code}) => {
    it('Compiles and runs an inline arrow function expression that performs', async () => {
        const identity = await main('dynamic-effect', 'hello world');
        expect(identity).toBe('hello world');
    });

    it('Compiles and runs an inline arrow function expression that recalls', async () => {
        const identity = await main('anything', 'functionalRecall');
        expect(identity).toBe('functionalRecall');
    });

    it('Compiles and runs an inline arrow function that is a child method in the virtual stack', async () => {
        const identity = await main(undefined);
        expect(identity).toEqual({data : 'performed from child' });
    })
};