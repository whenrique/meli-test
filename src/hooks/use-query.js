import { useEffect, useMemo, useState } from "react"

const useQuery = (params, search) => {
  const [query, setQuery] = useState(null)

  const qs = useMemo(() => new URLSearchParams(params), [params])

  useEffect(() => {
    const value = qs.get(search)
    setQuery(value)
  }, [qs, search])

  return query
}

export default useQuery
