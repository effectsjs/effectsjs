function main() {
  try {
    parent();
    perform Main();
  } handle (e) {
    if (e.type === "parent") {
      recall false;
    }
  }
}

function parent() {
  try{
    child();
  }handle(e){
    if(e.type === 'child'){

    }
  }
}

function child(){
  perform Child();
}

try {
  main();
} handle (e) {
  if (e.type === "main") {
    recall true;
  }
}
