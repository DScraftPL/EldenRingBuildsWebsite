import PlayerStat from './PlayerStat.js'

function Planner() {
  return (
    <div>
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
    </div>
  )
}

export default Planner;
