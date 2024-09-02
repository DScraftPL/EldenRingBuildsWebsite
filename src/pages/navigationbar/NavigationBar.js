import '../app/App.css'
import './NavigationBar.css'

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
    className="text-red-500 absolute right-2 m-2"
    onClick={toggleTheme}
  >WWW</button>)
}

//rounded taliwind css idea
//jakos lepiej ten button zrobic
function NavigationBar() {
  return (
    <div>
      <nav className="flex flex-row justify-center m-2 py-2 w-auto border-2 
        bg-white border-black
        dark:bg-black dark:border-white">
        <ul className='flex flex-row relative space-x-16 text-lg'>
          <li
            className='border-black dark:border-white dark:text-white border-2 p-1 hover:bg-blue-200'
          ><Link to="/">Home</Link></li>
          <li
            className='border-black dark:border-white dark:text-white border-2 p-1 hover:bg-blue-200'
          ><Link to="/builds">Builds</Link></li>
          <li
            className='border-black dark:border-white dark:text-white border-2 p-1 hover:bg-blue-200'
          ><Link to="/planner" >Planner</Link></li>
        </ul>
        <ButtonDarkMode />
      </nav>
      <Outlet />
    </div>
  )
}

export default NavigationBar;
