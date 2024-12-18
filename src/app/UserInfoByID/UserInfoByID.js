'use client'

import { useEffect, useState } from 'react'

import useFetchUserByID from './_useFetchUserByID'
import Select from './_Select'

export default function UserInfoByID({}) {
  const [userId, setUserId] = useState(null)

  // Use Effect runs one time when this component loads
  // Then it never ever runs even if you have state in it changing
  // Unless the useEffect also has the state as a dependency
  // useEffect(() => {}, [])

  // When the select input has a new value, setUserId on line 22 changes the state userId
  // That causes this whole component to re-render again (which reruns the useFetchUserByID custom hook again)
  // This causes it to return different user's information
  // Then the new user info is reassigned to user again which is stringified in the DOM
  const user = useFetchUserByID(userId)

  return (
    <>
      <div className="border p-4 bg-light rounded">
        <h2 className="mb-4">UserInfoByID</h2>

        <p>
          Select a <code>userId</code> to fetch from <code>https://jsonplaceholder.typicode.com/users/$userId</code>
        </p>

        <Select setUserId={setUserId} />

        <h3>Result:</h3>

        <p className="font-monospace">{JSON.stringify(user)}</p>
      </div>
    </>
  )
}
