import React from 'react'
import { useLocation } from 'react-router'
import { Redirect, RedirectProps } from 'react-router-dom'

export const LocationRedirect: React.FunctionComponent<RedirectProps> = (
  props
) => {
  const location = useLocation()
  let redirectTo = props.to as string
  redirectTo = redirectTo + location.search
  return (
    <Redirect {...props} to={redirectTo}>
      {props.children}
    </Redirect>
  )
}
