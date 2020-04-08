const effectTypeA = 'typeA';
const effectTypeB = 'typeB';
const effectTypeC = 'typeC';
const effectTypeD = 'typeD';

const EffectA = () => ({type : effectTypeA});
const EffectB = () => ({type : effectTypeB});
const EffectC = () => ({type : effectTypeC});
const EffectD = (data) => ({type : effectTypeD, data});

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
    }handle effectTypeA with (e) {
        aHandler();
    }handle effectTypeB with (e) {
        bHandler();
    }handle effectTypeC with (e) {
        cHandler();
    }handle effectTypeD with (e) {
        switch(e.data){
            case 1 : return aHandler();
            case 2 : return bHandler();
            case 3 : return cHandler();
            default : return recall "bazinga";
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

const performDTest = (input) => {
    'use effects';
    main(() => {
        return perform EffectD(input);
    })
};

const performAllTest = () => {
    'use effects'
    main(() => {
        return `${perform EffectA()}${perform EffectB()}${perform EffectC()}`;
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

    describe('Overlapping recall statements', () => {
        it('Should perform recall functions referenced in multiple places without cause', async () => {
            const resultA = await performDTest(1);
            const resultB = await performDTest(2);
            const resultC = await performDTest(3);
            const bazinga = await performDTest('bazinga');

            expect(resultA).toBe(effectTypeA);
            expect(resultB).toBe(effectTypeB);
            expect(resultC).toBe(effectTypeC);
            expect(bazinga).toBe('bazinga');
        });
    });

    it('Should handle all cases', async () => {
        const result = await performAllTest();

        expect(result).toBe(`${effectTypeA}${effectTypeB}${effectTypeC}`);
    })
};