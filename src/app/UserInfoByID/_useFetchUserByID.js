import { useState, useEffect } from 'react'

export default function useFetchUserByID(id) {
  const [user, setUser] = useState({})

  useEffect(() => {
    async function fetchUser() {
      // when the select input is loaded, it has the value 'null' which is the initial userId state
      // This stops sending a request with the id as null
      if (!id) {
        return
      }

      try {
        const request = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const response = await request.json()
        setUser(response)
      } catch (error) {
        console.log('This was an error', error)
      }
    }

    fetchUser()

    // I have to pass the id as dependency
    // If you don't, this useEffect runs when the first time this custom hook is invoked
    // But then subsequent ID changes do not cause it to rerun
    // Having it as a dependecy means run this useEffect every time the id changes
    // If you didnt have this custom hook and you added this useEffect directly on the component, you would have to pass the state variable as the dependency
    // When you invoke this custom hook, you still pass the state variable but here it's called id
  }, [id])

  return user
}
