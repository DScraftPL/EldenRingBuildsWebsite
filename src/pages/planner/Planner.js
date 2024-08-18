import { useState } from 'react'

import PlayerStats from './PlayerStats.js'
import GameplayStats from './GameplayStats.js'
import classes from './classes.json'

function Planner() {

  const [playerStats, setPlayerStats] = useState(classes.wretch);
  const [chosenClass, setChosenClass] = useState('wretch');


  const updatePlayerStats = (stat, newValue) => {
    if (newValue > 99) {
      setPlayerStats(prevStats => ({
        ...prevStats,
        [stat]: 99
      }))
    } else if (newValue >= classes[chosenClass][stat]) {
      setPlayerStats(prevStats => ({
        ...prevStats,
        [stat]: newValue
      }));
    } else {
      setPlayerStats(prevStats => ({
        ...prevStats,
        [stat]: classes[chosenClass][stat]
      }))
    }
  }

  const updateChosenClass = (e) => {
    console.log(e.target.value);
    setChosenClass(e.target.value);
    setPlayerStats(classes[e.target.value]);
  }

  return (
    <div>
      <h1>Planner</h1>
      <PlayerStats playerStats={playerStats} onChange={updatePlayerStats} />
      <label htmlFor='selectClass'> Choose class: </label>
      <select id="selectClass" value={chosenClass} onChange={updateChosenClass}>
        <option value="wretch">wretch</option>
        <option value="confessor">confessor</option>
      </select>
      <GameplayStats playerStats={playerStats} />
    </div>
  )
}

export default Planner;
