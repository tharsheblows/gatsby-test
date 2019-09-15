export const createLocalLinksInContent = (html, wordPressUrl,prefix='') => {

	  const regex = /href\s*=\s*(['"])(https?:\/\/.+?)\1/gi
      let link

      while ((link = regex.exec(html)) !== null) {
		  if( link[2].includes( wordPressUrl ) ){
        	html = html.replace(
        	  wordPressUrl,
        	  `${prefix}`
			)
		  }
      }
      return html
}

export const createLocalLink = ( url, wordPressUrl, prefix='' ) => {
	if (`#` === url) {
      return null
	}

	return url.replace( wordPressUrl, prefix)
}
