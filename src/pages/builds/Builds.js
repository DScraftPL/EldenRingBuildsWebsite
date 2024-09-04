function Builds() {

  const getSavedData = () => {
    let data = [];
    for (let i = 0; i < localStorage.length; i++) {
      data.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    console.log(data)
    return data;
  }

  const savedData = getSavedData();

  const parseObjectToDiv = (dataEntry) => {
    const stats = dataEntry.stats;
    const start = dataEntry.class;
    const equip = dataEntry.equip;
    var element = "<div>"
    console.log(stats)
  }

  return (
    <div className="flex flex-wrap flex-row justify-center p-2 m-2 dark:bg-zinc-900 border-2 border-black dark:text-white dark:border-white">
      {
        savedData.map((dataEntry, index) => (
          <div key={index} className="border-2 border-black dark:border-white p-2 m-2">
            <div>
              {
                Object.entries(dataEntry.stats).map(([stat, statValue], index) => (
                  <p key={index}>{stat} {statValue}</p>
                ))
              }
            </div>
            <div>
              {
                Object.entries(dataEntry.equip.armor).map(([stat, statValue], index) => (
                  <p key={index}>{stat} {statValue}</p>
                ))
              }
            </div>
            <div>
              {
                Object.entries(dataEntry.equip.talismans).map(([stat, statValue], index) => (
                  <p key={index}>{stat} {statValue}</p>
                ))
              }
            </div>
            <p>class {dataEntry.class}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Builds;
