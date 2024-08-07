import { useEffect } from "react";

function GameplayStat(props) {
  useEffect(() => {
    const handleEvent = (event) => {
      if (props.statlisten === event.detail.statname) {
        var el = document.getElementById(props.statname);
        el.value = 0;
        console.log('detected matching event ' + event.detail.statname)
      }
    }
    document.addEventListener('statChange', handleEvent);
  }, [props])

  return (
    <div>
      <label>{props.statname}</label><input id={props.statname} readOnly />
    </div>
  )
}

export default GameplayStat;
