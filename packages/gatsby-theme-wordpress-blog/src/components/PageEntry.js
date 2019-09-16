/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import ContactForm from './ContactForm'
import {replace,regexp} from '@wordpress/shortcode'
import sanitizeHtml from 'sanitize-html'

const PageEntry = ({ content, title }) => {
  // This is kind of ugly. What I'm going to do is this: if there's a contact-form shortcode on the pageEntry.
  // I think what I want is here but I'm going to do it this way. FOR NOW.
  // https://github.com/WordPress/gutenberg/blob/81d5569428ef12a01adb352e2461ba0ace4b6a5e/packages/blocks/src/api/raw-handling/shortcode-converter.js
  const hasContactForm = regexp('contact-form').test(content)
  // then I'm going to stip out the shortcode and also any empty p tags that the shortcode leaves behind.
  const finalContent = ( hasContactForm ) ?
    sanitizeHtml(
		replace('contact-form', content, () => ' ' ),
		{
   			exclusiveFilter: function(frame) {
        		return frame.tag === 'p' && !frame.text.trim();
			}
		}
	)
	: content
  // and maybe add the contact form underneath the content.
const maybeContactForm = ( hasContactForm ) ? <ContactForm /> : ''

  return (
    <div sx={{ variant: `cards.muted` }}>
      <div className="content">
        <Styled.h1
          sx={{
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
          className="page-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Styled.root dangerouslySetInnerHTML={{ __html: finalContent }} />
      </div>
      {maybeContactForm}
    </div>
  )
}

export default PageEntry
