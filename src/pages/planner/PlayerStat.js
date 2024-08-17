import { useState } from "react";

function PlayerStat(props) {

  const [inputValue, setInputValue] = useState(10);

  const statUpdateEvent = new CustomEvent('statChange', {
    bubbles: true,
    cancelable: true,
    detail: { statname: props.statname }
  });

  const validateNumber = (min, max, number) => {
    if (number.isNaN) {
      number = min;
    }
    number = Math.max(number, min);
    number = Math.min(number, max);
    return number;
  }

  const raise = () => {
    setInputValue(validateNumber(1, 99, Number(inputValue) + 1));
    statUpdateEvent.detail.statvalue = inputValue;
    window.dispatchEvent(statUpdateEvent);
  }

  const lower = () => {
    setInputValue(validateNumber(1, 99, Number(inputValue) - 1));
    statUpdateEvent.detail.statvalue = inputValue;
    window.dispatchEvent(statUpdateEvent);
  }

  const valueChanged = (event) => {
    setInputValue(Number(event.target.value));
    statUpdateEvent.detail.statvalue = inputValue;
    window.dispatchEvent(statUpdateEvent);
    console.log('value changend')
  }

  const handleBlur = () => {
    setInputValue(validateNumber(1, 99, Number(inputValue)));
    statUpdateEvent.detail.statvalue = inputValue;
    window.dispatchEvent(statUpdateEvent);
    console.log('blurtriggered')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('correcting value')
      setInputValue(validateNumber(1, 99, Number(inputValue)));
      statUpdateEvent.detail.statvalue = inputValue;
      window.dispatchEvent(statUpdateEvent);
    }
    console.log('keyDownTriggered')
  }

  return (
    <div className="flex flex-row">
      <label for={props.statname} className="w-1/6">{props.statname}</label>
      <input type="text"
        id={props.statname}
        className="w-8"
        value={inputValue}
        onChange={valueChanged}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
      <button className="w-4 p-0 m-0" onClick={() => lower(props.statname)}>-</button>
      <button className="w-4 p-0 m-0" onClick={() => raise()}>+</button>
    </div>
  )
}

export default PlayerStat;
