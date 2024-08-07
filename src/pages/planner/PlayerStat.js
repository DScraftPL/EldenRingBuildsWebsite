function PlayerStat(props) {

  const raise = (a) => {
    var el = document.getElementById(a);
    var x = Number(el.value);
    if (x < 0) {
      el.value = 0;
    } else if (x > 99) {
      el.value = 99;
    } else {
      el.value = x + 1;
    }
  }

  const lower = (a) => {
    var el = document.getElementById(a);
    var x = Number(el.value);
    if (x <= 0) {
      el.value = 0;
    } else if (x > 99) {
      el.value = 99;
    } else {
      el.value = x - 1;
    }
  }

  return (
    <div className="flex flex-row">
      <label for={props.statname} className="w-1/6">{props.statname}</label>
      <input type="text" id={props.statname} readOnly value="10" className="w-4" />
      <button className="w-4 p-0 m-0" onClick={() => lower(props.statname)}>-</button>
      <button className="w-4 p-0 m-0" onClick={() => raise(props.statname)}>+</button>
    </div>
  )
}

export default PlayerStat;
