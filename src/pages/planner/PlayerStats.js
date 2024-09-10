import './PlayerStats.css'

function PlayerStat({ id, stat, onChange, classStat }) {

  const handleChange = (e) => {
    onChange(id, parseInt(e.target.value));
  }

  return (
    <div className="flex flex-row">
      <label className="w-32" htmlFor={id}>{id}, ({classStat}): </label>
      <input
        id={id}
        className="w-8"
        type="text"
        value={stat}
        onChange={handleChange}
      />
      <button
        className="buttonSingle"
        onClick={() => { onChange(id, stat - 1); }}>-</button>
      <button
        className="buttonSingle"
        onClick={() => { onChange(id, stat + 1); }}>+</button>
    </div>
  )

}

function PlayerStats({ playerStats, onChange, classStat }) {

  return (
    <div className="flex flex-col items-center">
      <h1>level: {playerStats.level}</h1>
      <PlayerStat id='vigor' stat={playerStats.vigor} onChange={onChange} classStat={classStat.vigor} />
      <PlayerStat id='mind' stat={playerStats.mind} onChange={onChange} classStat={classStat.mind} />
      <PlayerStat id='endurance' stat={playerStats.endurance} onChange={onChange} classStat={classStat.endurance} />
      <PlayerStat id='strength' stat={playerStats.strength} onChange={onChange} classStat={classStat.strength} />
      <PlayerStat id='dexterity' stat={playerStats.dexterity} onChange={onChange} classStat={classStat.dexterity} />
      <PlayerStat id='inteligence' stat={playerStats.inteligence} onChange={onChange} classStat={classStat.inteligence} />
      <PlayerStat id='faith' stat={playerStats.faith} onChange={onChange} classStat={classStat.faith} />
      <PlayerStat id='arcane' stat={playerStats.arcane} onChange={onChange} classStat={classStat.arcane} />
    </div>
  )
}



export default PlayerStats;
