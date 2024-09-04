function Builds() {

  const savedData = () => {
    let data = [];
    for (let i = 0; i < localStorage.length; i++) {
      data.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return data
  }

  const consoleLog = () => {
    console.log(savedData());
  }

  return (
    <div className="p-2 m-2 dark:bg-zinc-900 dark:text-white">
      <button onClick={consoleLog}>WWWWW</button>
    </div>
  )
}

export default Builds;
