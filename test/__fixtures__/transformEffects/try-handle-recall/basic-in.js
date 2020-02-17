
const mainEffectHandler = (input) => {
    try{
        return input()
    }handle(e){
        switch(e.type){
            case 'main': recall {value : e.type}
        }
    }
};

const ident = x => x;

const performer = () => {
    return perform {type : "main"};
};

const main = () => {
    "use effects"
    return mainEffectHandler(() => {
        const {value} = performer();

        return ident(value);
    })
};

module.exports.test = ({it, expect, code}) => {
    it('Should handle the happy-path nested child', async () => {
        console.log(code);
        const result = await main();

        expect(result).toEqual('main')
    });
};