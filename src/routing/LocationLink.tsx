import React from 'react'
import { useLocation } from 'react-router'
import { LinkProps, Link } from 'react-router-dom'

export const LocationLink: React.FunctionComponent<LinkProps> = (props) => {
  const location = useLocation()
  let linkTo = props.to as string
  linkTo = linkTo + location.search
  return (
    <Link {...props} to={linkTo}>
      {props.children}
    </Link>
  )
}
