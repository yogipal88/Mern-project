import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
import EditBlog from './components/EditBlog'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/add' element={ <AddBlog /> } />
          <Route path='/show/:id' element={ <ShowBlog /> } />
          <Route path='/edit/:id' element={ <EditBlog /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
