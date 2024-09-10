import '../app/App.css'
import './NavigationBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'
import { faXTwitter, faGithub, faReddit } from '@fortawesome/free-brands-svg-icons'

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
    className="text-yellow-500 text-xl absolute right-2 m-2"
    onClick={toggleTheme}
  ><FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} /></button>)
}

//rounded taliwind css idea
//jakos lepiej ten button zrobic
function NavigationBar() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <nav className="flex flex-row justify-center mt-2 mx-2 mb-1 p-2 border-2 
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
      </header>
      <main className='flex-grow border-2 border-black dark:border-white p-2 m-2 dark:text-white'>
        <Outlet />
      </main>
      <footer className='flex flex-row justify-between border-2 border-black dark:border-white p-2 mt-1 mx-2 mb-2 dark:text-white'>
        <p className='mx-2'>&copy; Kacper "DScraftPL" Wiącek</p>
        <div className='mx-2 space-x-2'>
          <a href="https://www.reddit.com"> <FontAwesomeIcon icon={faReddit} /></a>
          <a href="https://www.twitter.com" > <FontAwesomeIcon icon={faXTwitter} /></a>
          <a href="https://github.com"> <FontAwesomeIcon icon={faGithub} /> </a>
        </div>
      </footer>
    </div>
  )
}

export default NavigationBar;
