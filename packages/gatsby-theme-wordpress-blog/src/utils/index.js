export const createLocalLink = (url, wordPressUrl,prefix='') => {
  if (`#` === url) {
    return null
  }
  return url.replace( wordPressUrl, `${prefix}`)
}
