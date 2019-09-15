import { a } from '../typo'

export const links = {
         decorated: {
           ...a,
           color: `primary`,
		   position: `relative`,
		   zIndex: 100,

           ':after': {
             content: `""`,
             width: `50%`,
             height: `50%`,
             position: `absolute`,
             left: `-5px`,
             bottom: 0,
             variant: `gradients.links`,
             opacity: 0.8,
			 transition: `all .4s ease-in-out`,
			 zIndex: -1,
           },
           ':hover': {
             ':after': {
               width: `110%`,
             },
           },
         },
       }
