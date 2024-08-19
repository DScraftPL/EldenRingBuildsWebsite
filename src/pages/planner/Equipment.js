import talismansData from './talismans.json'

function ArmorSlot() {
  return (<div>
    armor
  </div>)
}

function TalismanSlot({ id, chosenEquipment, updateChosenTalisman }) {
  const talismansNames = Object.keys(talismansData)
  return (<div>
    <select
      id={'selectTalisman' + id}
      onChange={(e) => updateChosenTalisman(e, 'talisman' + id)}
      value={chosenEquipment.talismans['talisman' + id]}
    >
      {talismansNames.map((talisman, index) => (
        <option key={index} value={talisman}>{talisman}</option>
      ))}
    </select>
  </div>)
}

function Equipment({ chosenEquipment, updateChosenTalisman }) {
  return (<div>
    <TalismanSlot id="1" chosenEquipment={chosenEquipment} updateChosenTalisman={updateChosenTalisman} />
    <TalismanSlot id="2" chosenEquipment={chosenEquipment} updateChosenTalisman={updateChosenTalisman} />
    <TalismanSlot id="3" chosenEquipment={chosenEquipment} updateChosenTalisman={updateChosenTalisman} />
    <TalismanSlot id="4" chosenEquipment={chosenEquipment} updateChosenTalisman={updateChosenTalisman} />
  </div>)
}

export default Equipment;
