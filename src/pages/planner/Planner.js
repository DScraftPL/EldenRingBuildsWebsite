import { useState } from 'react'

import PlayerStat from './PlayerStat.js'
import GameplayStat from './GameplayStat.js'

function Planner() {

  const startingClass = {
    wretch: {
      vigor: 10,
      mind: 10,
      endurance: 10,
      strength: 10,
      dexterity: 10,
      inteligence: 10,
      faith: 10,
      arcane: 10
    }
  }

  const [initStats, setInitStats] = useState(startingClass.wretch)

  return (
    <div className=''>
      <h1>Planner</h1>
      <div className="bg-red-500 flex flex-col">
        <PlayerStat statname="vigor" defaultvalue={initStats.vigor} />
        <PlayerStat statname="mind" defaultvalue={initStats.mind} />
        <PlayerStat statname="endurance" defaultvalue={initStats.endurance} />
        <PlayerStat statname="strength" defaultvalue={initStats.strength} />
        <PlayerStat statname="dexterity" defaultvalue={initStats.dexterity} />
        <PlayerStat statname="inteligence" defaultvalue={initStats.inteligence} />
        <PlayerStat statname="faith" defaultvalue={initStats.faith} />
        <PlayerStat statname="arcane" defaultvalue={initStats.arcane} />
      </div>
      <div>
        <GameplayStat statname="HP" statlisten="vigor" />
        <GameplayStat statname="FP" statlisten="mind" />
        <GameplayStat statname="Stamina" statlisten="endurance" />
      </div>
      <div>
        <select name="startingClass" id="startingClass" >
          <option value="wretch" default> wretch </option>
        </select>
      </div>
    </div>
  )
}

export default Planner;
