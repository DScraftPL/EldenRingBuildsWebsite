import { useEffect, useState } from "react";
import { updateHP, updateFP, updateEND } from "./updateStats";

function GameplayStat(props) {

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const handleStatChangeEvent = (event) => {
      const statname = event.detail.statname;
      if (props.statlisten === statname) {
        var statval = Number(event.detail.statvalue);
        console.log(statval)
        switch (statname) {
          case "vigor": setInputValue(updateHP(statval)); break;
          case "mind": setInputValue(updateFP(statval)); break;
          case "endurance": setInputValue(updateEND(statval)); break;
          default: console.log('switchcase');
        }
        console.log('detected matching event ' + event.detail.statname)
      }
    }
    window.addEventListener('statChange', handleStatChangeEvent);
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
