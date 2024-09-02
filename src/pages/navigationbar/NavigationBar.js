import '../app/App.css'
import './NavigationBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

import {
  Outlet,
  Link
} from "react-router-dom"
import { useEffect, useState } from 'react'

function ButtonDarkMode() {

  const [theme, setTheme] = useState("dark");
  const revTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const doc = window.document.documentElement;
    doc.classList.remove(revTheme);
    doc.classList.add(theme);
  }, [theme, revTheme])

  const toggleTheme = () => {
    console.log(theme)
    setTheme(revTheme);
  }

  return (<button
    className="text-yellow-500 text-lg absolute right-4 m-2"
    onClick={toggleTheme}
  ><FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} /></button>)
}

//rounded taliwind css idea
//jakos lepiej ten button zrobic
function NavigationBar() {
  return (
    <div>
      <nav className="flex flex-row justify-center m-2 py-2 w-auto border-2 
        bg-white border-black
        dark:bg-zinc-900 dark:border-white">
        <ul className='flex flex-row relative space-x-16 text-lg'>
          <li
          ><Link to="/">Home</Link></li>
          <li
          ><Link to="/builds">Builds</Link></li>
          <li
          ><Link to="/planner" >Planner</Link></li>
        </ul>
        <ButtonDarkMode />
      </nav>
      <Outlet />
    </div>
  )
}

export default NavigationBar;
