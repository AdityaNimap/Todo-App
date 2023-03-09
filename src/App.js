import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FetchApi from './Component/FetchApi'
import AxiosApi from './Component/AxiosApi'
import Home from './Component/Home'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/fetchapi' element={<FetchApi/>}/>
        <Route path='axiosapi' element={<AxiosApi/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
