import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({title='Portfolio',color=false}) {  
  

  return (
    <>
    <nav className={`navbar navbar-dark navbar-expand-lg bg-${color===true?'dark':'transparent'} position-fixed top-0 w-100`}>
  <div className="container-fluid">
    <Link className="navbar-brand fs-1" to="/">{title}</Link>
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-expanded="false">
      <span className="navbar-toggler-icon" id='nav-icon'></span>
    </button>
    <div className="collapse navbar-collapse" id="menu">
      <ul className="navbar-nav me-auto mb-lg-0 mx-auto gap-lg-5 fs-5 text-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
