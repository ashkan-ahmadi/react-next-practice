// import { useEffect, useState } from 'react'
import './bs.css' // Bootstrap v5.3.3 CSS

import UserInfoByID from './UserInfoByID/UserInfoByID'

export default function Home() {
  // const [state, setState] = useState()
  // useEffect(() => {}, [])

  return (
    <div className="container">
      <h1>React and Nextjs Practice</h1>
      <hr />

      <UserInfoByID />
    </div>
  )
}
