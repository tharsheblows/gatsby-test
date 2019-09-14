export const createLocalLink = (url, wordPressUrl) => {
  if (`#` === url) {
    return null
  }
  return url.replace(`https://idontthink.wpengine.com`, ``)
}
