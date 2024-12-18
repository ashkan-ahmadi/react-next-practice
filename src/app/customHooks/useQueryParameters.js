import React, { useState, useEffect } from 'react'

/**
 * Custom hook to manage and parse query parameters from the URL.
 * @returns {Object} An object containing the current query parameters as key-value pairs.
 */
export default function useQueryParameters() {
  const [params, setParams] = useState({})

  useEffect(() => {
    /**
     * Initializes the query parameters.
     *
     * Note: This is defined in the ⁠ useEffect ⁠ instead of the initial state of ⁠ useState ⁠
     * due to server-side rendering issues in older versions of Next.js.
     * See: https://stackoverflow.com/questions/75692116/next-js-13-window-is-not-defined
     */
    const updateParams = () => {
      setParams(Object.fromEntries(new URLSearchParams(window.location.search)))
    }

    updateParams() // Set initial query parameters.

    window.addEventListener('popstate', updateParams)

    // Cleanup the event listener when the component is unmounted.
    return () => {
      window.removeEventListener('popstate', updateParams)
    }
  }, [])

  return params
}
