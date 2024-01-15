import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import ContactDetails from './pages/ContactDetails'
import NoPage from './pages/NoPage'

const Router  = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="blogs" element={<Blogs/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="contact/:id" element={<ContactDetails/>}/>
            <Route path="*" element={<NoPage/>}/>
        </Route>
        </Routes>
    
    </BrowserRouter>
    
    
  )
}

export default Router;
