import {
  updateHP,
  updateFP,
  updateStamina,
  updateImmunity,
  updateFocus,
  updateRobustness,
  updateEquipLoad,
  updateMaxEquipLoad,
  updateRollType,
  updatePhysicalDef,
  updateMagicDef,
  updateFireDef,
  updateLightningDef,
  updateHolyDef,
  updateDiscovery,
  updateVitality,
  updateNegation,
  updatePoise
} from "./updateStats";

function GameplayStat({ id, update }) {
  return (<div className="flex flex-row">
    <label
      htmlFor={id}
      className="w-32"
    >{id} </label>
    <input
      id={id}
      className="w-8"
      value={parseFloat(update)}
      type="text"
      step="any"
      readOnly
    />
  </div>)
}

function RollStat({ id, update }) {
  return (<div className="flex flex-row">
    <label
      htmlFor={id}
      className="w-32"
    >{id} </label>
    <input
      id={id}
      className="w-20"
      value={update}
      type="text"
      step="any"
      readOnly
    />
  </div>)
}
function GameplayStats({ playerStats, chosenEquipment }) {

  return (
    <div className="flex">
      <div id="primaryStats" className="border-black border-2 m-2 p-2">
        <GameplayStat id="HP" update={updateHP(playerStats.vigor, chosenEquipment)} />
        <GameplayStat id="FP" update={updateFP(playerStats.mind, chosenEquipment)} />
        <GameplayStat id="Stamina" update={updateStamina(playerStats.endurance, chosenEquipment)} />
        <GameplayStat id="Equip Load" update={updateEquipLoad(chosenEquipment)} />
        <GameplayStat id="Max Equip Load" update={updateMaxEquipLoad(playerStats.endurance, chosenEquipment)} />
        <RollStat id="Roll Type" update={updateRollType(playerStats.endurance, chosenEquipment)} />
        <GameplayStat id="Poise" update={updatePoise(chosenEquipment)} />
      </div>
      <div id="secondaryStats" className="border-black border-2 m-2 p-2">
        <GameplayStat id="Immunity" update={updateImmunity(playerStats.vigor, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Focus" update={updateFocus(playerStats.mind, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Robustness" update={updateRobustness(playerStats.endurance, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Vitality" update={updateVitality(playerStats.arcane, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Discovery" update={updateDiscovery(playerStats.arcane, chosenEquipment)} />
      </div>
      <div id="defensiveStats" className="border-black border-2 m-2 p-2">
        <GameplayStat id="Physical Def" update={updatePhysicalDef(playerStats.strength, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Strike Def" update={updatePhysicalDef(playerStats.strength, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Slash Def" update={updatePhysicalDef(playerStats.strength, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Pierce Def" update={updatePhysicalDef(playerStats.strength, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Magic Def" update={updateMagicDef(playerStats.inteligence, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Fire Def" update={updateFireDef(playerStats.vigor, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Lightning Def" update={updateLightningDef(playerStats.level, chosenEquipment)} />
        <GameplayStat id="Holy Def" update={updateHolyDef(playerStats.arcane, playerStats.level, chosenEquipment)} />
      </div>
      <div id="negationStats" className="border-black border-2 m-2 p-2">
        <GameplayStat id="Physical Neg" update={updateNegation('PhysRed', chosenEquipment, '')} />
        <GameplayStat id="Strike Neg" update={updateNegation('PhysRed', chosenEquipment, 'StrikeRed')} />
        <GameplayStat id="Slash Neg" update={updateNegation('PhysRed', chosenEquipment, 'SlashRed')} />
        <GameplayStat id="Pierce Neg" update={updateNegation('PhysRed', chosenEquipment, 'PierceRed')} />
        <GameplayStat id="Magic Neg" update={updateNegation('MagicRed', chosenEquipment, '')} />
        <GameplayStat id="Fire Neg" update={updateNegation('FireRed', chosenEquipment, '')} />
        <GameplayStat id="Lightning Neg" update={updateNegation('LightRed', chosenEquipment, '')} />
        <GameplayStat id="Holy Neg" update={updateNegation('HolyRed', chosenEquipment, '')} />
      </div>
    </div>
  )
}

export default GameplayStats;
