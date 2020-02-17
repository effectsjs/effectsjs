const effectTypeA = 'typeA';
const effectTypeB = 'typeB';
const effectTypeC = 'typeC';

const EffectA = () => ({type : effectTypeA});
const EffectB = () => ({type : effectTypeB});
const EffectC = () => ({type : effectTypeC});

const aHandler = () => {
  recall effectTypeA;
};

const bHandler = () => {
    recall effectTypeB;
};

const cHandler = () => {
  recall effectTypeC;
};

const main = (fn) => {
    try{
        return fn();
    }handle(e){
        switch(e){
            case effectTypeA : return aHandler();
            case effectTypeB : return bHandler();
            case effectTypeC : return cHandler();
        }
    }
};

const performATest = () => {
    'use effects'
    main(() => {
       return perform EffectA();
    });
};

const performBTest = () => {
    'use effects'
    main(() => {
        return perform EffectB();
    });
};

const performCTest = () => {
    'use effects'
    main(() => {
        return perform EffectC();
    });
};

const performAllTest = () => {
    'use effects'
    main(() => {
        let result = '';

        result += perform EffectA();
        result += perform EffectB();
        result += perform EffectC();

        return result;
    });
};

module.exports.test = ({it, describe, expect, code}) => {
    describe('Single effect', () => {
        it('Should perform effect A', async () => {
            const result = await performATest();
            expect(result).toBe(effectTypeA);
        });

        it('Should perform effect B', async () => {
            const result = await performBTest();
            expect(result).toBe(effectTypeB);
        });

        it('Should perform effect C', async () => {
            const result = await performCTest();
            expect(result).toBe(effectTypeC);
        });
    });

    it('Should handle all cases', async () => {
        const result = await performAllTest();

        expect(result).toBe(`${effectTypeA}${effectTypeB}${effectTypeC}`);
    })
};