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
import { useState } from 'react';

function App() {

  const [isDarkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    setDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? "bg-white text-black" : "bg-black text-white"}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavigationBar changeMode={changeMode} />}>
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
