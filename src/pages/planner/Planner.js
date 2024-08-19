import { useState } from 'react'

import PlayerStats from './PlayerStats.js'
import GameplayStats from './GameplayStats.js'
import Equipment from './Equipment.js'
import classes from './classes.json'
//import talismans from './talismans.json'

function Planner() {
  const [playerStats, setPlayerStats] = useState(classes.wretch);
  const [chosenClass, setChosenClass] = useState('wretch');
  const [chosenEquipment, setChosenEquipment] = useState({
    head: 'none',
    chest: 'none',
    hands: 'none',
    legs: 'none',
    talismans: {
      talisman1: "None",
      talisman2: "None",
      talisman3: "None",
      talisman4: "None"
    }
  });

  const calculateLevel = (stats) => {
    let level = parseInt(classes[chosenClass].level);
    for (let key of ['vigor', 'mind', 'endurance', 'strength', 'dexterity', 'inteligence', 'faith', 'arcane']) {
      level += parseInt(stats[key]) - parseInt(classes[chosenClass][key]);
    }
    return level;
  }

  const updatePlayerStats = (stat, newValue) => {
    setPlayerStats(prevStats => {
      const newStatValue = Math.min(Math.max(newValue, parseInt(classes[chosenClass][stat])), 99);
      const updatedStats = {
        ...prevStats,
        [stat]: newStatValue
      };
      const newLevel = calculateLevel(updatedStats);
      return {
        ...updatedStats,
        level: newLevel
      };
    });
  }

  const updateChosenClass = (e) => {
    console.log(e.target.value);
    setChosenClass(e.target.value);
    setPlayerStats(classes[e.target.value]);
  }

  const updateChosenArmor = (slot, newValue) => {
    setChosenEquipment(chosenEquipment[slot] = newValue);
  }

  const updateChosenTalisman = (e, slot) => {
    const getBaseName = (name) => {
      return name.split(' +')[0];

    }
    const selectedTalismans = Object.values(chosenEquipment.talismans)
    selectedTalismans.map(getBaseName);

    if (getBaseName(chosenEquipment.talismans[slot]) !== getBaseName(e.target.value)) {
      if (selectedTalismans.includes(getBaseName(e.target.value)) && e.target.value !== 'None') {
        alert('Talisman is already chosen');
        return;
      }
    }
    setChosenEquipment(prevEquipment => ({
      ...prevEquipment,
      talismans: {
        ...prevEquipment.talismans,
        [slot]: e.target.value
      }
    }));
  }

  return (
    <div>
      <h1>Planner</h1>
      <PlayerStats playerStats={playerStats} onChange={updatePlayerStats} classStat={classes[chosenClass]} />
      <label htmlFor='selectClass'> Choose class: </label>
      <select id="selectClass" value={chosenClass} onChange={updateChosenClass}>
        <option value="hero">hero</option>
        <option value="bandit">bandit</option>
        <option value="astrologer">astrologer</option>
        <option value="warrior">warrior</option>
        <option value="confessor">confessor</option>
        <option value="prisoner">prisoner</option>
        <option value="vagabond">vagabond</option>
        <option value="wretch">wretch</option>
        <option value="prophet">prophet</option>
        <option value="samurai">samurai</option>
      </select>
      <GameplayStats playerStats={playerStats} chosenEquipment={chosenEquipment} />
      <Equipment chosenEquipment={chosenEquipment} updateChosenTalisman={updateChosenTalisman} />
    </div>
  )
}

export default Planner;
