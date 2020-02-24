function analyzePage () {
  const url = window.location.href
  const size = perform { type: 'get_page_size', payload: { url } }
  const { path: analysisPath } = perform { type: 'flush_analysis', payload: { url, size } }
  console.info(`analysis { size: ${size}, url: '${url}' } written to: ${analysisPath}`)
}

function main () {
  'use effects'
  try {
    analyzePage() // observe, _not_ async!
  } handle (evt) {
    switch (evt.type) {
      case 'get_page_size': getPageSize(evt.payload.url).then(size => { recall size })
      case 'flush_analysis': flushAnalysis(evt.payload).then(metadata => { recall metadata })
    }
  }
}

async function getPageSize (url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error('failed to fetch page size')
  return parseFloat(res.headers.get("content-length"))
}

function flushAnalysis (payload) {
  // createReadStream(payload).pipe(fs.createWriteStream(...))
  return Promise.resolve(payload).then(() => ({ path: '/var/analyses/123.json' }))
}

main()
