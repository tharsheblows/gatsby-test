import { transitions } from '../sharedStyles'
import { theme } from 'theme-ui'

export const menus = {
         main: {
           nav: {
             '>ul': {
               display: `flex`,
               justifyContent: `space-between`,
               p: 0,
               '> .menu-item': {
                 pl: 3,
                 fontSize: 1,
               },
             },

             '.menu-item, a': {
               color: 'text',
               cursor: 'pointer',
               fontFamily: 'heading',
               textTransform: 'uppercase',
               transition: transitions[1],
               borderBottom: `1px solid transparent`,
			   variant: `gradients.headings`,
			   fontSize: `1.2em`,
               '&:hover': {
                 color: `secondary`,
                 background: `transparent`,
                 WebkitBackgroundClip: `unset`,
                 backgroundClip: `unset`,
                 WebkitTextFillColor: `unset`,
                 borderImageSlice: `1`,
               },
             },
             a: {
               '&:hover': {
                 borderBottom: t => `1px solid  ${t.colors.secondary}`,
               },
             },
             '.sub-menu': {
               opacity: 0,
               visibility: `hidden`,
               transform: `translateY(5px)`,
               transition: transitions[1],
               position: `absolute`,
               left: 0,
               top: `45px`,
               p: 0,
               bg: `white`,
               border: t => `1px solid ${t.colors.muted}`,
               '>.menu-item': {
                 width: `auto`,
                 borderBottom: t => `1px solid ${t.colors.muted}`,
                 py: `5px`,
                 px: `10px`,
                 width: `180px`,
                 textTransform: `capitalize`,

                 '&:last-child': {
                   border: `none`,
                 },
               },
             },
             '.has-subMenu.menu-item': {
               position: `relative`,
               '&:hover': {
                 '>.sub-menu': {
                   opacity: 1,
                   visibility: `visible`,
                   transform: `translateY(0)`,
                 },
               },
             },
           },
         },
       }
