import {
  Outlet,
  Link
} from "react-router-dom"

function NavigationBar() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/builds">Builds</Link></li>
          <li><Link to="/planner">Planner</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default NavigationBar;
