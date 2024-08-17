import PlayerStat from './PlayerStat.js'
import GameplayStat from './GameplayStat.js'

function Planner() {
  return (
    <div className=''>
      <h1>Planner</h1>
      <div className="bg-red-500 flex flex-col">
        <PlayerStat statname="vigor" defaultvalue="10" />
        <PlayerStat statname="mind" defaultvalue="10" />
        <PlayerStat statname="endurance" defaultvalue="10" />
        <PlayerStat statname="strength" defaultvalue="10" />
        <PlayerStat statname="dexterity" defaultvalue="10" />
        <PlayerStat statname="inteligence" defaultvalue="10" />
        <PlayerStat statname="faith" defaultvalue="10" />
        <PlayerStat statname="arcane" defaultvalue="10" />
      </div>
      <div>
        <GameplayStat statname="HP" statlisten="vigor" />
        <GameplayStat statname="FP" statlisten="mind" />
      </div>
    </div>
  )
}

export default Planner;
