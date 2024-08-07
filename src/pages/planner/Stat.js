function Stat(props) {
  return (
    <div>
      <label for={props.statname}>{props.statname}</label>
      <input type="number" id={props.statname} /> <button />
    </div>
  )
}

export default Stat;
