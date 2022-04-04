import { useCallback, useEffect, useState } from 'react'
import useFetch from 'use-http'
import { useParams } from 'react-router-dom'

const useItem = () => {
  const [data, setData] = useState()
  const { id } = useParams()

  const { get, response, loading, error } = useFetch(`/api/items/${id}`)

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

export default useItem
