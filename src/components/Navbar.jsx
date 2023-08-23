import React from 'react'

const Navbar = ({mode}) => {
  return (
    <nav >
        <div className={`${mode ? "logo-light": "logo-dark" }`}>YourBuss</div>
        <div className={`navlinks ${mode ? "navlinks-light": "navlinks-dark" }`}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar