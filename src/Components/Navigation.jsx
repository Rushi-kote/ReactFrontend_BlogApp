import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"

const Navigation = () => {
  return (
  <>
    <div className='NavBar'>
    <Link className='link' to='/' >Home</Link>
    <Link className='link' to='/bollywood' >Bollywood</Link>
    <Link className='link' to='/hollywood' >Hollywood</Link>
    <Link className='link' to='/technology' >Technology</Link>
    <Link className='link' to='/fitness' >Fitness</Link>
    <Link className='link' to='/food' >Food</Link> 
    </div>
    <hr />
  </>
  )
}

export default Navigation