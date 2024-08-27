import '../app/App.css'
import './NavigationBar.css'

import {
  Outlet,
  Link
} from "react-router-dom"

//rounded taliwind css idea
function NavigationBar() {
  return (
    <div>
      <nav className="border-black border-2 m-2 py-2">
        <ul className='flex flex-row justify-center space-x-16 text-lg'>
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
      </nav>
      <Outlet />
    </div>
  )
}

export default NavigationBar;
