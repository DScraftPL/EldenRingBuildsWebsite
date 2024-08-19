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
  updateVitality
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

function GameplayStats({ playerStats }) {

  return (
    <div>
      <GameplayStat id="HP" update={updateHP(playerStats.vigor)} />
      <GameplayStat id="FP" update={updateFP(playerStats.mind)} />
      <GameplayStat id="Stamina" update={updateStamina(playerStats.endurance)} />
      <GameplayStat id="Equip Load" update={updateEquipLoad(playerStats.endurance)} />
      <GameplayStat id="Immunity" update={updateImmunity(playerStats.vigor, playerStats.level)} />
      <GameplayStat id="Focus" update={updateFocus(playerStats.mind, playerStats.level)} />
      <GameplayStat id="Robustness" update={updateRobustness(playerStats.endurance, playerStats.level)} />
      <GameplayStat id="Physical Defense" update={updatePhysicalDef(playerStats.strength, playerStats.level)} />
      <GameplayStat id="Magic Defense" update={updateMagicDef(playerStats.inteligence, playerStats.level)} />
      <GameplayStat id="Fire Defense" update={updateFireDef(playerStats.vigor, playerStats.level)} />
      <GameplayStat id="Lightning Defense" update={updateLightningDef(playerStats.level)} />
      <GameplayStat id="Holy Defense" update={updateHolyDef(playerStats.arcane, playerStats.level)} />
      <GameplayStat id="Discovery" update={updateDiscovery(playerStats.arcane)} />
      <GameplayStat id="Vitality" update={updateVitality(playerStats.arcane, playerStats.level)} />
    </div>
  )
}

export default GameplayStats;
