import { useEffect, useState } from "react";

function GameplayStat(props) {

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const handleCustomEvent = (event) => {
      if (props.statlisten === event.detail.statname) {
        var statval = event.detail.statvalue;
        if (statval > 20) {
          setInputValue(20);
        } else if (statval > 10) {
          setInputValue(10);
        } else {
          setInputValue(0);
        }
        console.log('detected matching event ' + event.detail.statname)
      }
    }
    window.addEventListener('statChange', handleCustomEvent);
  }, [props])

  return (
    <div>
      <label>{props.statname}</label>
      <input id={props.statname}
        value={inputValue}
        readOnly />
    </div>
  )
}

export default GameplayStat;
