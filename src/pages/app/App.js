import './App.css';
import NavigationBar from '../navigationbar/NavigationBar.js';
import Home from "../home/Home.js"
import Builds from "../builds/Builds.js"
import Planner from "../planner/Planner.js"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavigationBar />}>
            <Route index element={<Home />} />
            <Route path="builds" element={<Builds />} />
            <Route path="planner" element={<Planner />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
