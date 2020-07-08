import { buttons } from './buttons'
import { transitions } from '../sharedStyles'

const sharedInputStyles = {
  width: `80%`,
  marginBottom: `2em`,
  borderRadius: 5,
  border: t => `1px solid ${t.colors.shadeBlue}`,
  transition: transitions[0],
  boxShadow: `none`,
  ':focus': {
    boxShadow: t => `0 0 5px 3px ${t.colors.yellow}`,
    border: t => `1px solid ${t.colors.grayLighter}`,
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
      ...sharedInputStyles,
    },
    textarea: {
      ...sharedInputStyles,
    },
    button: {
      width: `80%`,
      variant: `buttons.primary`,
      color: `black`,
      ':hover': {
        variant: `buttons.secondary`,
      },
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
            variant: `buttons.secondary`,
          },
        },
      },
    },
  },
  subscription: {
    color: `text`,
    fontSize: [1, 2],
    fontFamily: `body`,
	margin: `1em auto`,
	textAlign: `left`,
    label: {
      width: `100%`,
      display: `block`,
      color: t => `${t.colors.primaryLight}`,
      verticalAlign: `top`,
    },
    input: {
	  ...sharedInputStyles,
	  width: `100%`,
	  padding: `0.5em`
    },
    textarea: {
      ...sharedInputStyles,
    },
    button: {
	  margin: `0 auto 1em auto`,
	  variant: `buttons.primary`,
	  display: `inline-block`,
      color: `black`,
      ':hover': {
        variant: `buttons.secondary`,
      },
	},
	borderBottom: t => `1px solid ${t.colors.light}`
  }
}
