import PlayerStat from './PlayerStat.js'
import GameplayStat from './GameplayStat.js'

function Planner() {
  return (
    <div className=''>
      <h1>Planner</h1>
      <div className="bg-red-500 flex flex-col">
        <PlayerStat statname="vigor" />
        <PlayerStat statname="mind" />
        <PlayerStat statname="endurance" />
        <PlayerStat statname="strength" />
        <PlayerStat statname="dexterity" />
        <PlayerStat statname="inteligence" />
        <PlayerStat statname="faith" />
        <PlayerStat statname="arcane" />
      </div>
      <div>
        <GameplayStat statname="HP" statlisten="vigor" />
        <GameplayStat statname="FP" statlisten="mind" />
      </div>
    </div>
  )
}

export default Planner;
