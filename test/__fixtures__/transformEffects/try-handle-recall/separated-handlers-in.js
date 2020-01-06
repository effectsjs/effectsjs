function handleTheThing(){
  recall "The thing has been dealth with.";
}

const handleTheOtherThing = () => {
    recall "The other thing has been dealt with.";
}

try{
    const messageFromTheThing = perform ({type : 'the thing'})
}handle(e){
    if(e.type === 'the_thing'){
        handleTheThing(e);
    }else if(e.type === 'the_other_thing'){
        handleTheOtherThing(e);
    }
}