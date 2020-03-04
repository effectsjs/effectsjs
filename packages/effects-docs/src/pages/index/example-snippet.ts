'use effects'
try {
  await work()
} handle 'log' with ({message}) {
      console.log(message)
  }
}

async function work () {
  const res = await fetch(...)
  perform { type: 'log', message: `fetch completed with status: ${res.status}` }
  return res.json()
}
