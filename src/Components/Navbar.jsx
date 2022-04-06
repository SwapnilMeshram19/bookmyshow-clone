import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>

<Link to='/movie'>Navbar</Link>
<Link to='/moviedata'></Link>
<Link to='/payment'>payment</Link>

    </div>
  )
}

export  {Navbar}