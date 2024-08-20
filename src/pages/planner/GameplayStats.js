import {
  updateHP,
  updateFP,
  updateStamina,
  updateImmunity,
  updateFocus,
  updateRobustness,
  updateEquipLoad,
  updatePhysicalDef,
  updateMagicDef,
  updateFireDef,
  updateLightningDef,
  updateHolyDef,
  updateDiscovery,
  updateVitality,
  updateNegation
} from "./updateStats";

function GameplayStat({ id, update }) {
  return (<div>
    <label htmlFor={id}>{id} </label>
    <input
      id={id}
      value={parseFloat(update)}
      type="number"
      step="any"
      readOnly
    />
  </div>)
}

function GameplayStats({ playerStats, chosenEquipment }) {

  return (
    <div className="flex flex-row">
      <div id="primaryStats" className="border-black border-2 m-2 p-2">
        <GameplayStat id="HP" update={updateHP(playerStats.vigor, chosenEquipment)} />
        <GameplayStat id="FP" update={updateFP(playerStats.mind, chosenEquipment)} />
        <GameplayStat id="Stamina" update={updateStamina(playerStats.endurance, chosenEquipment)} />
        <GameplayStat id="Max Equip Load" update={updateEquipLoad(playerStats.endurance, chosenEquipment)} />
      </div>
      <div id="secondaryStats" className="border-black border-2 m-2 p-2">
        <GameplayStat id="Immunity" update={updateImmunity(playerStats.vigor, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Focus" update={updateFocus(playerStats.mind, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Robustness" update={updateRobustness(playerStats.endurance, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Vitality" update={updateVitality(playerStats.arcane, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Discovery" update={updateDiscovery(playerStats.arcane, chosenEquipment)} />
      </div>
      <div id="defensiveStats" className="border-black border-2 m-2 p-2">
        <GameplayStat id="Physical Defense" update={updatePhysicalDef(playerStats.strength, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Strike Defense" update={updatePhysicalDef(playerStats.strength, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Slash Defense" update={updatePhysicalDef(playerStats.strength, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Pierce Defense" update={updatePhysicalDef(playerStats.strength, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Magic Defense" update={updateMagicDef(playerStats.inteligence, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Fire Defense" update={updateFireDef(playerStats.vigor, playerStats.level, chosenEquipment)} />
        <GameplayStat id="Lightning Defense" update={updateLightningDef(playerStats.level, chosenEquipment)} />
        <GameplayStat id="Holy Defense" update={updateHolyDef(playerStats.arcane, playerStats.level, chosenEquipment)} />
      </div>
      <div id="negationStats" className="border-black border-2 m-2 p-2">
        <GameplayStat id="Physical Negation" update={updateNegation('PhysRed', chosenEquipment, '')} />
        <GameplayStat id="Strike Negation" update={updateNegation('PhysRed', chosenEquipment, 'StrikeRed')} />
        <GameplayStat id="Slash Negation" update={updateNegation('PhysRed', chosenEquipment, 'SlashRed')} />
        <GameplayStat id="Pierce Negation" update={updateNegation('PhysRed', chosenEquipment, 'PierceRed')} />
        <GameplayStat id="Magic Negation" update={updateNegation('MagicRed', chosenEquipment, '')} />
        <GameplayStat id="Fire Negation" update={updateNegation('FireRed', chosenEquipment, '')} />
        <GameplayStat id="Lightning Negation" update={updateNegation('LightRed', chosenEquipment, '')} />
        <GameplayStat id="Holy Negation" update={updateNegation('HolyRed', chosenEquipment, '')} />
      </div>
    </div>
  )
}

export default GameplayStats;
