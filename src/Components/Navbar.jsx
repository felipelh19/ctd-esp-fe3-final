import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './utils/Theme.context'
import { useContext } from 'react'

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  
  return (
    <nav>
      <div className="flex">
        <div className="flex">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/favs">Favs</Link>
            </li>
          </ul>
        </div>
        <button onClick={themeContext.changeTheme}>Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar