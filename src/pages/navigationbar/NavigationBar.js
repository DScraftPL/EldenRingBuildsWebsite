import {
  Outlet,
  Link
} from "react-router-dom"

function NavigationBar() {
  return (
    <div>
      <nav className="bg-white">
        <ul className="flex space-x-8 justify-center">
          <li className="border-black border-2 p-1"><Link to="/">Home</Link></li>
          <li className="border-black border-2 p-1"><Link to="/builds">Builds</Link></li>
          <li className="border-black border-2 p-1"><Link to="/planner">Planner</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default NavigationBar;
