import { a } from '../typo'

export const links = {
  decorated: {
    ...a,
    color: `muted`,
    position: `relative`,

    ':before': {
      content: `""`,
      width: `50%`,
      height: `50%`,
      position: `absolute`,
      left: `-5px`,
      bottom: 0,
      bg: `primary`,
      opacity: 0.3,
      transition: `all .4s ease-in-out`,
    },
    ':hover': {
      color: `primary`,
      ':before': {
        width: `110%`,
      },
    },
  },
}
