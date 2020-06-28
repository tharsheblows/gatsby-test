export const pagination = {
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
  fontSize: 1,
  pr: 5,
  mb: 4,
  '.mutted': {
    color: `muted`,
  },
}

export const pageNumbers = {
  ul: {
    display: `flex`,
    jusifyContent: `center`,
  },
  a: {
    py: `5px`,
    px: 1,
    variant: `gradients.secondary`,
    borderRadius: `10%`,
    border: `none`,
    mr: `5px`,
    color: `white`,
    transition: `all .4s ease-in-out`,
    '&:hover, &[aria-current="page"]': {
      variant: `gradients.primary`,
    },
  },
}
