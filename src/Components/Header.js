import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function Header() {
    return (
        <div>
            <Nav></Nav>
            <Link to="/"></Link>
            <div className="contsiner">
            <Routes>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/' element={<Home />}></Route>
                <Route path='/shop' element={<Shop />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
            </div>
            
            <Footer></Footer>
        </div>
    )
}

export default Header
