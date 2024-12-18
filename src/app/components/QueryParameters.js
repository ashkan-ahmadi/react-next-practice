import { useEffect } from 'react'
import useQueryParameters from '../customHooks/useQueryParameters'

export default function QueryParameters() {
  const params = useQueryParameters()

  useEffect(() => {
    console.log(Object.keys(params).length)
  }, [params])

  return (
    <>
      <h2>Query Parameters</h2>

      {Object.keys(params).length ? (
        <>
          <p>Found {Object.keys(params).length} query parameter(s):</p>
          <ul>
            {Object.entries(params).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No query parameters found in the URL.</p>
      )}
    </>
  )
}
