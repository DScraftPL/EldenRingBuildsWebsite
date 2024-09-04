import { useState } from 'react'

import PlayerStats from './PlayerStats.js'
import GameplayStats from './GameplayStats.js'
import Equipment from './Equipment.js'
import classes from '../../data/classes.json'

import './Planner.css'

function Planner() {
  const [playerStats, setPlayerStats] = useState(classes.wretch);
  const [chosenClass, setChosenClass] = useState('wretch');
  const [buildName, setBuildName] = useState("");
  const [spanEmptyStatus, setEmptyStatus] = useState(false);
  const [spanNameStatus, setNameStatus] = useState(false);
  const [chosenEquipment, setChosenEquipment] = useState({
    armor: {
      head: 'None',
      chest: 'None',
      hands: 'None',
      legs: 'None'
    },
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
    setChosenClass(e.target.value);
    setPlayerStats(classes[e.target.value]);
  }

  const updateChosenArmor = (e, slot) => {
    setChosenEquipment((prevEquipment) => ({
      ...prevEquipment,
      armor: {
        ...prevEquipment.armor,
        [slot]: e.target.value
      }
    }));
  }

  const updateChosenTalisman = (e, slot) => {
    const getBaseName = (name) => {
      return name.split(' +')[0];
    }
    //selectedTalismans.map(getBaseName) -- i was looking for this for 10 mins, learn from my mistakes
    const selectedTalismans = Object.values(chosenEquipment.talismans).map(getBaseName);

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

  const updateBuildName = (e) => {
    setBuildName(e.target.value);
  }

  const saveToLocalStorage = () => {
    const toSave = {
      stats: playerStats,
      class: chosenClass,
      equip: chosenEquipment
    }
    console.log(toSave);
    if (buildName === "") {
      setEmptyStatus(true);
      setNameStatus(false);
      return;
    }
    if (localStorage.getItem(buildName) !== null) {
      setNameStatus(true);
      setEmptyStatus(false);
      return;
    }
    setNameStatus(false);
    setEmptyStatus(false);
    console.log(spanNameStatus);
    console.log(spanEmptyStatus);
    localStorage.setItem(buildName, JSON.stringify(toSave));
  }

  const classNames = Object.keys(classes);

  return (
    <div className='h-full'>
      <div className="flex flex-wrap justify-center border-2 border-black dark:border-white m-2 p-2 h-full">
        <div className="border-2 border-black m-2 p-2 dark:border-white dark:bg-zinc-900 dark:text-white">
          <PlayerStats playerStats={playerStats} onChange={updatePlayerStats} classStat={classes[chosenClass]} />
          <label htmlFor='selectClass'> Choose class: </label>
          <select id="selectClass" value={chosenClass} onChange={updateChosenClass}>
            {
              classNames.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))
            }
          </select>
        </div>
        <GameplayStats playerStats={playerStats} chosenEquipment={chosenEquipment} />
        <Equipment chosenEquipment={chosenEquipment} updateChosenTalisman={updateChosenTalisman} updateChosenArmor={updateChosenArmor} />
        <div className='flex flex-col items-center m-2 p-2 border-2 border-black dark:text-white dark:bg-zinc-900 dark:border-white'>
          <button>Save to file</button>
          <button>Load to file</button>
          <label htmlFor="buildName">name of build:</label><input id="buildName" className="text-center" onChange={updateBuildName} value={buildName} />
          <span className={spanNameStatus ? "block text-red-600" : "hidden"}>Name already exists</span>
          <span className={spanEmptyStatus ? "block text-red-600" : "hidden"}>Name cannot be empty </span>
          <button onClick={saveToLocalStorage}>Save to localStorage</button>
        </div>
      </div>
    </div>
  )
}

export default Planner;
    /*
let numberToSave = 0;
let found = false
for (let missingNumber = 0; missingNumber < localStorage.length; missingNumber++) {
if (localStorage.getItem(missingNumber) === null) {
found = true;
numberToSave = missingNumber;
break;
}
}
if (!found) {
numberToSave = localStorage.length;
} */
