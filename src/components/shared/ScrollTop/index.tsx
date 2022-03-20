import { PropsWithChildren, ReactElement, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollTop = ({ children }: PropsWithChildren<{}>) => {
  const location = useLocation()

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])

  return children as ReactElement
}
