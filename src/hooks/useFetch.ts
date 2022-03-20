import { useState } from 'react'
import axios from 'axios'

type Query = {
  [key: string]: any
}

interface UseFetchOptions <T> {
  url: string
  params?: Query
  defaultResponse?: T
  // eslint-disable-next-line
  responseModifier?: (response: any, prev: any) => any
}

interface UseFetchResult <T> {
  response: T
  loading: boolean
  // eslint-disable-next-line
  fetch: (qs: Partial<Query>) => void
  reset: () => void
}

export const sleep = () => new Promise((resolve) => {
  setTimeout(() => { resolve(true) }, 500)
})

export const useFetch = <T = any>(
  {
    url, params, defaultResponse, responseModifier,
  }: UseFetchOptions<T | null>,
): UseFetchResult<T | null> => {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(defaultResponse || null)

  const reset = () => {
    setResponse(defaultResponse || null)
  }

  const fetch = async (qs: Partial<Query> = {}) => {
    setLoading(true)
    try {
      const { data } = await axios.get(url, {
        params: { ...params, ...qs },
      })
      // Just to simulate network request in production
      await sleep()
      setResponse((prev) => (responseModifier ? responseModifier(data, prev) : data))
    } finally {
      setLoading(false)
    }
  }

  return {
    response,
    loading,
    fetch,
    reset,
  }
}
