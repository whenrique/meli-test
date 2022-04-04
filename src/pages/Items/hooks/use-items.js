import { useCallback, useEffect, useState } from "react"
import useFetch from 'use-http'
import { useLocation } from "react-router-dom"

import useQuery from "../../../hooks/use-query"

const useItems = () => {
  const [data, setData] = useState()
  const { search } = useLocation()
  const q = useQuery(search, 'q')
  const { get, response, loading, error } = useFetch(`/api/items?q=${q}`)

  const fetchItems = useCallback(async () => {
    const res = await get()
    if (response.ok) {
      setData(res)
    }
  }, [get, response])

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  return {
    data,
    loading,
    error
  }
}

export default useItems
