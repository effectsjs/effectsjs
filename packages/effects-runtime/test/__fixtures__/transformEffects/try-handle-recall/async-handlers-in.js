const performBigFunEffect = async () => {
  await Promise.resolve();
};

try{
    main();
}handle(e){
    if(e.type === 'bigFun'){
        performBigFunEffect(e).then(result => {
            recall result;
        });
    }
}