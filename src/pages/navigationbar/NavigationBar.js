import '../app/App.css'
import './NavigationBar.css'

import {
  Outlet,
  Link
} from "react-router-dom"

function ButtonDarkMode({ changeMode }) {
  return (<button
    className="text-red-500 absolute right-2 m-2"
    onClick={changeMode}
  >WWW</button>)
}

//rounded taliwind css idea
//jakos lepiej ten button zrobic
function NavigationBar({ changeMode }) {
  return (
    <div>
      <nav className="flex flex-row justify-center border-black border-2 m-2 py-2 w-auto">
        <ul className='flex flex-row relative space-x-16 text-lg'>
          <li
            className='border-black border-2 p-1 hover:bg-blue-200'
          ><Link to="/">Home</Link></li>
          <li
            className='border-black border-2 p-1 hover:bg-blue-200'
          ><Link to="/builds">Builds</Link></li>
          <li
            className='border-black border-2 p-1 hover:bg-blue-200'
          ><Link to="/planner" >Planner</Link></li>
        </ul>
        <ButtonDarkMode changeMode={changeMode} />
      </nav>
      <Outlet />
    </div>
  )
}

export default NavigationBar;
