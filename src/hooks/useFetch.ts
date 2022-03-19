import { useEffect, useState } from 'react'
import axios from 'axios'

type Query = {
  [key: string]: any
}

interface UseFetchOptions <T> {
  url: string
  params?: Query
  defaultResponse?: T
}

interface UseFetchResult <T> {
  response: T
  loading: boolean
  // eslint-disable-next-line
  fetch: (qs: Partial<Query>) => void
}

export const useFetch = <T = any>(
  { url, params, defaultResponse }: UseFetchOptions<T | null>,
): UseFetchResult<T | null> => {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(defaultResponse || null)

  const fetch = async (qs: Partial<Query> = {}) => {
    setLoading(true)
    try {
      const { data } = await axios.get(url, {
        params: { ...params, ...qs },
      })
      setResponse(data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return {
    response,
    loading,
    fetch,
  }
}
