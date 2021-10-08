import React, { useState, useEffect } from 'react'
import { useLocation, RouteProps, useRouteMatch } from 'react-router'
import { LinkProps, Link } from 'react-router-dom'

export const RestoreRouterLink: React.FunctionComponent<
  LinkProps & { route: RouteProps }
> = (props) => {
  const location = useLocation()
  const [path, setPath] = useState(props.to as string)
  const match = useRouteMatch(props.route)
  useEffect(() => {
    if (match) {
      setPath(location.pathname + location.search)
    }
  }, [match, location])

  return <Link to={path}>{props.children}</Link>
}
