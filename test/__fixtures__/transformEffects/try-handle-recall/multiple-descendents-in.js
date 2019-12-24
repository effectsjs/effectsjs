const main = () => {
    a();
};

const a = () => {
    b();
};

const b = () => {
    perform Log("I did it!")
};

try{
    main()
}handle(e){
    if(e.type === 'log'){
        console.log(e.message);
    }
}