const main = async () => {
  'use effects'
  try{
    const integer = perform { type: 'get_int' }
    console.log({ integer, ok: 5 === integer })
  } handle(e) {
    if (e.type === 'get_int') {
        recall 5;
    }
  }
}
main()
