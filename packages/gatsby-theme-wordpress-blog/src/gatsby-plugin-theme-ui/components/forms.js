import {buttons} from './buttons'
import { transitions } from '../sharedStyles'

const sharedInputStyles = {
  width: `80%`,
  marginBottom: `2em`,
  borderRadius: 5,
  border: `1px solid white`,
  transition: transitions[0],
  boxShadow: `none`,
  ':focus': {
    boxShadow: t => `0 0 5px 3px ${t.colors.yellow}`,
    border: t =>  `1px solid ${t.colors.grayLighter}`,
    outline: `none`,
  },
}
export const forms = {
         main: {
           color: `text`,
           fontSize: [1, 2],
           fontFamily: `body`,
		   margin: `0 auto`,
		   width: `80%`,
           label: {
             width: `5em`,
             display: `inline-block`,
			 color: `primary`,
			 verticalAlign: `top`,
           },
           input: {
			...sharedInputStyles
           },
           textarea: {
			...sharedInputStyles
           },
           ul: {
             marginLeft: `5em`,
             listStyleType: `none`,
             padding: 0,
             li: {
               display: `inline-block`,
               marginLeft: 0,
			   width: `30%`,
			   minWidth: `12em`,
               input: {
                 width: `80%`,
				 variant: `buttons.primary`,
				 color: `black`,
				 ':hover': {
					 variant: `buttons.secondary`
				 }
               },
             },
           },
         },
       }