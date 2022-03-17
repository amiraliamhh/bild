import {
  Link as RRLink, LinkProps, useResolvedPath, useMatch,
} from 'react-router-dom'

interface Props extends LinkProps {
  activeClass?: string
}

export const Link = ({
  children,
  to,
  className = '',
  activeClass = '',
  ...rest
}: Props) => {
  const { pathname } = useResolvedPath(to)
  const match = useMatch({ path: pathname, end: true })
  console.log(match, to, activeClass)

  return (
    <RRLink {...rest} to={to} className={`${className} ${match ? activeClass : ''}`}>
      {children}
    </RRLink>
  )
}
