import { useEffect, useRef } from 'react'

export function useInterval(callback: Function, delay: number) {
  const interval = useRef<any>(null)
  const savedCallback = useRef<Function|null>(null)

  const clear = () => {
    clearInterval(interval.current)
  }

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current?.()
    }
    interval.current = setInterval(tick, delay)
    return () => clear()
  }, [delay])

  return {
    clear,
  }
}
