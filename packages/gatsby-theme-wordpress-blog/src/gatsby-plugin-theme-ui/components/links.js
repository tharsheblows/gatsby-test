import { a } from '../typo'

export const links = {
  decorated: {
    ...a,
    color: `primary`,
    position: `relative`,
    zIndex: 1,
    display: `inline-block`,

    ':after': {
      content: `""`,
      width: `60%`,
      height: `20%`,
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
  plain: {
    ...a,
  },
}
