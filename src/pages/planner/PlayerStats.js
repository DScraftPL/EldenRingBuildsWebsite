function PlayerStat({ id, stat, onChange }) {

  const handleChange = (e) => {
    onChange(id, parseInt(e.target.value));
  }

  return (
    <div>
      <label htmlFor={id}>{id}: </label>
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

function PlayerStats({ playerStats, onChange }) {

  return (
    <div>
      <PlayerStat id='vigor' stat={playerStats.vigor} onChange={onChange} />
      <PlayerStat id='mind' stat={playerStats.mind} onChange={onChange} />
      <PlayerStat id='endurance' stat={playerStats.endurance} onChange={onChange} />
    </div>
  )
}



export default PlayerStats;
