import { updateHP, updateFP, updateStamina } from "./updateStats";

function GameplayStat({ id, stat, update }) {
  return (<div>
    <label htmlFor={id}>{id}</label>
    <input
      id={id}
      value={update(stat)}
      readOnly
    />
  </div>)
}

function GameplayStats({ playerStats }) {

  return (
    <div>
      <GameplayStat id="HP" stat={playerStats.vigor} update={updateHP} />
      <GameplayStat id="FP" stat={playerStats.mind} update={updateFP} />
      <GameplayStat id="Stamina" stat={playerStats.endurance} update={updateStamina} />
    </div>
  )
}

export default GameplayStats;
