import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Builds() {

  const getSavedData = () => {
    let data = [];
    for (let i = 0; i < localStorage.length; i++) {
      data.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      data[i].name = localStorage.key(i);
    }
    return data;
  }

  const [savedData, setSavedData] = useState(getSavedData());

  const ModifyButton = ({ dataEntry }) => {
    const navigate = useNavigate();

    return (
      <button onClick={() => {
        navigate('/planner', {
          state:
          {
            class: dataEntry.class,
            equip: dataEntry.equip,
            stats: dataEntry.stats
          }
        })
      }
      }>Modify</button>
    )
  }

  const DeleteButton = ({ dataEntry }) => {
    const deleteThis = () => {
      localStorage.removeItem(dataEntry.name);
      setSavedData(savedData.filter(item => item !== dataEntry))
    }
    return (<button onClick={deleteThis}>Delete</button>)
  }

  return (
    <div className="flex flex-wrap flex-row justify-center">
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
            <p>name {dataEntry.name}</p>
            <ModifyButton dataEntry={dataEntry} />
            <DeleteButton dataEntry={dataEntry} />
          </div>
        ))
      }
    </div>
  )
}

export default Builds;
