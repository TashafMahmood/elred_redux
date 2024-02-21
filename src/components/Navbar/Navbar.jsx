import React from 'react'
import './navbar.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const navigate = useNavigate()
    const count = useSelector(state => state.Cart.length)
    return (
        <div className="navbar bg-dark text-light px-5 custom_nav">
            <h5 onClick={() => navigate('/')}>Home</h5>
            <h5 onClick={() => navigate('/cart')}>Cart: {count}</h5>
        </div>
    )
}

export default Navbar
