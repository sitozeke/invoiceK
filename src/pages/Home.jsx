import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <h1 className="text-lg font-semibold text-red-600">Hello World</h1>
    <Link to='signin'>Signin</Link>
    </>
  )
}

export default Home