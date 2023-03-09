import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to='/fetchapi'>Fetch Api App</Link><br/><br/>
      <Link to='/axiosapi'>Axios Api App</Link>
    </div>
  )
}

export default Home
