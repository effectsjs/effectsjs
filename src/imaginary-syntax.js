const Sleep = (ms) => {}

// =====================================

const someGuyDownDeep = () => {
  console.log('Taking a nap');

  perform Sleep(1000);

  console.log('That was a good snooze!')
};

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

function* someGuyDownDeep(){
    console.log('Taking a nap');

    yield perform(Sleep(1000))

    console.log('That was a good snooze!')
}

// ======================================




const withSleepHandler = (fn) => {
    try{
        fn()
    } handle(effect) {
        if(effect instanceof Sleep){
            setTimeout(() => {
                resume;
            }, effect.ms)
        }
    }
};



const myProgram = () => {
  console.log('wow!');

  someGuyDownDeep();

  console.log("I'm a parent now!");
};

const result = withSleepHandler(() => myProgram());

const a = 1+1;
setTimeout(() => console.log('Look ma no hands!', result));


// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓


function* withSleepHandler(fn){
    function handler(effect) {
        if(effect instanceof Sleep){
            setTimeout(() => {
                return resume(effect)
            }, effect.ms)
        }

        return perform(effect);
    }

    withHandler(
        handler,
        fn
    )
}

function* myProgram(){
    console.log('wow!');

    yield someGuyDownDeep();

    console.log(`I'm a real boy!`)
}

function continuation(result){
    const a = 1+1;
    setTimeout(() => console.log('Look ma no hands!', result));
}

run(withSleepHandler(myProgram()), continuation);














































const Log = (data) => ({type : 'log', data});


const a = () => {
  perform Log(`Look ma I'm logging`)
};

try{
    const result = a();
    console.log(result);
}handle(e){
    if(e.type === 'log'){
        console.log(e.data);
        resume e with null;
    }

    if(e.type === 'fetch'){
        fetch(e.data).then(result => {
            resume e with result;
        })
    }
}

console.log('After everything else');

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓


function* a(){
    yield perform(Log(`Look Ma I'm Logging`))
}

const program = withHandler(
    {
        *log(data, resume){
            const result = yield (handler) => {
                console.log(data);

                run(handler, null);
            };

            return yield result;
        }
    },
    (function* () {
        // Try block
        const result = a();
        console.log(result);
    })()
);

const programContinuation = () => {
    console.log('After everything else');
}


run(program, null, programContinuation);