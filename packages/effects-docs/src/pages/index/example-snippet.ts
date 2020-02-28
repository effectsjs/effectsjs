'use effects'
try {
  await work()
} handle (event) {
  switch event.type {
    case 'log': {
      console.log(event.message)
      recall null
    }
  }
}

async function work () {
  const res = await fetch(...)
  perform { type: 'log', message: `fetch completed with status: ${res.status}` }
  return res.json()
}
