function PlayerStat({ id, stat, onChange, classStat }) {

  const handleChange = (e) => {
    onChange(id, parseInt(e.target.value));
  }

  return (
    <div>
      <label htmlFor={id}>{id}, ({classStat}): </label>
      <input
        id={id}
        type="text"
        value={stat}
        onChange={handleChange}
      />
      <button onClick={() => { onChange(id, stat - 1); }}>-</button>
      <button onClick={() => { onChange(id, stat + 1); }}>+</button>
    </div>
  )

}

function PlayerStats({ playerStats, onChange, classStat }) {

  return (
    <div className="border-black border-2 m-2 p-2">
      <p>level: {playerStats.level}</p>
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
