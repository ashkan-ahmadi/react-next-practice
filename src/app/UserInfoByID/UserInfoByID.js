import { useEffect, useState } from 'react'
import useFetchUserByID from './_useFetchUserByID'

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

        <select
          className="form-select mb-4"
          id="select"
          defaultValue={0}
          onChange={e => {
            setUserId(e.target.value)
          }}
        >
          <option disabled value="0">
            Select ID
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <h3>Result:</h3>

        <p className="font-monospace">{JSON.stringify(user)}</p>
      </div>
    </>
  )
}
