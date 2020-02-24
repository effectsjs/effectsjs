function getWindow () {
  if (typeof window !== `undefined`) {
    return window
  }
  return null
}

export function parseCurrentQuery () {
  const win = getWindow()
  if (!win) return {}
  return (win.location.search || '')
    .replace('?', '')
    .split('&')
    .map(pair => pair.split('='))
    .reduce((acc, pair) => ({ ...acc, [pair[0]]: pair[1] }), {})
}
export function setQuery (kvMap) {
  const win = getWindow()
  if (!win) return
  const queryBody = Object.keys(kvMap)
    .filter(key => kvMap[key])
    .map(key => `${key}=${kvMap[key]}`)
    .join('&')
  window.history.replaceState(window.history.state, '', `?${queryBody}`)
}
