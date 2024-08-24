import talismansData from '../../data/talismans.json'
import headData from '../../data/head.json'
import chestData from '../../data/chest.json'
import handsData from '../../data/hands.json'
import legsData from '../../data/legs.json'

const headNames = Object.keys(headData)
const chestNames = Object.keys(chestData)
const handsNames = Object.keys(handsData)
const legsNames = Object.keys(legsData)

function HeadSlot({ chosenEquipment, updateChosenArmor }) {
  return (<div>
    <select
      id={'selectHead'}
      onChange={(e) => updateChosenArmor(e, 'head')}
      value={chosenEquipment.armor['head']}
    >
      {
        headNames.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))
      }
    </select>
  </div>)
}
function ChestSlot({ chosenEquipment, updateChosenArmor }) {
  return (<div>
    <select
      id={'selectChest'}
      onChange={(e) => updateChosenArmor(e, 'chest')}
      value={chosenEquipment.armor['chest']}
    >
      {
        chestNames.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))
      }
    </select>
  </div>)
}
function HandsSlot({ chosenEquipment, updateChosenArmor }) {
  return (<div>
    <select
      id={'selectHands'}
      onChange={(e) => updateChosenArmor(e, 'hands')}
      value={chosenEquipment.armor['hands']}
    >
      {
        handsNames.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))
      }
    </select>
  </div>)
}
function LegsSlot({ chosenEquipment, updateChosenArmor }) {
  return (<div>
    <select
      id={'selectLegs'}
      onChange={(e) => updateChosenArmor(e, 'legs')}
      value={chosenEquipment.armor['legs']}
    >
      {
        legsNames.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))
      }
    </select>
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
      {talismansNames.map((talisman) => (
        <option key={talisman} value={talisman}>{talisman}</option>
      ))}
    </select>
  </div>)
}

function Equipment({ chosenEquipment, updateChosenTalisman, updateChosenArmor }) {
  return (<div>
    <TalismanSlot id="1" chosenEquipment={chosenEquipment} updateChosenTalisman={updateChosenTalisman} />
    <TalismanSlot id="2" chosenEquipment={chosenEquipment} updateChosenTalisman={updateChosenTalisman} />
    <TalismanSlot id="3" chosenEquipment={chosenEquipment} updateChosenTalisman={updateChosenTalisman} />
    <TalismanSlot id="4" chosenEquipment={chosenEquipment} updateChosenTalisman={updateChosenTalisman} />
    <HeadSlot chosenEquipment={chosenEquipment} updateChosenArmor={updateChosenArmor} />
    <ChestSlot chosenEquipment={chosenEquipment} updateChosenArmor={updateChosenArmor} />
    <HandsSlot chosenEquipment={chosenEquipment} updateChosenArmor={updateChosenArmor} />
    <LegsSlot chosenEquipment={chosenEquipment} updateChosenArmor={updateChosenArmor} />
  </div>)
}

export default Equipment;
