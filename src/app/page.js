'use client'

// import { useEffect, useState } from 'react'
import './bs.css' // Bootstrap v5.3.3 CSS
import UserInfoByID from './UserInfoByID/UserInfoByID'

export default function Home() {
  // Use Effect runs one time when this component loads
  // Then it never ever runs even if you have state in it changing
  // Unless the useEffect also has the state as a dependency
  // useEffect(() => {}, [])

  return (
    <div className="container">
      <h1>Hooks</h1>
      <hr />

      <UserInfoByID />
    </div>
  )
}
