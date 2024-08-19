function updateHP(lvl) {
  if (lvl >= 61) {
    return Math.floor(
      1900 + 200 * (1 - Math.pow((1 - ((lvl - 60) / 39)), 1.2))
    );
  } else if (lvl >= 41) {
    return Math.floor(
      1450 + 450 * (1 - Math.pow((1 - ((lvl - 40) / 20)), 1.2))
    )
  } else if (lvl >= 26) {
    return Math.floor(
      800 + 650 * (Math.pow((((lvl - 25) / 15)), 1.1))
    )
  } else {
    return Math.floor(
      300 + 500 * (Math.pow((((lvl - 1) / 24)), 1.5))
    )
  }
}

function updateFP(lvl) {
  if (lvl >= 61) {
    return Math.floor(
      350 + 100 * (((((lvl - 60) / 39)), 1.2))
    );
  } else if (lvl >= 36) {
    return Math.floor(
      200 + 150 * (1 - Math.pow((1 - ((lvl - 35) / 25)), 1.2))
    )
  } else if (lvl >= 16) {
    return Math.floor(
      95 + 105 * (((((lvl - 15) / 20))))
    )
  } else {
    return Math.floor(
      50 + 45 * (((((lvl - 1) / 14))))
    )
  }
}

function updateStamina(lvl) {
  if (lvl >= 61) {
    return Math.floor(
      155 + 15 * (((((lvl - 50) / 49))))
    );
  } else if (lvl >= 36) {
    return Math.floor(
      130 + 25 * (((((lvl - 30) / 20))))
    )
  } else if (lvl >= 16) {
    return Math.floor(
      105 + 25 * (((((lvl - 15) / 15))))
    )
  } else {
    return Math.floor(
      80 + 25 * (((((lvl - 1) / 14))))
    )
  }
}

function updateImmunity(vigor, level) {
  let stat = 0
  if (level >= 162) {
    stat = 160 + 20 * (((((level + 79 - 240) / 552))));
  } else if (level >= 112) {
    stat = 145 + 15 * (((((level + 79 - 190) / 50))));
  } else if (level >= 72) {
    stat = 105 + 40 * (((((level + 79 - 150) / 40))));
  } else {
    stat = 75 + 30 * (((((level + 79 - 1) / 149))));
  }
  if (vigor >= 61) {
    stat += 40 + 10 * (((((vigor - 60) / 39))));
  } else if (vigor >= 41) {
    stat += 30 + 10 * (((((vigor - 40) / 20))));
  } else if (vigor >= 31) {
    stat += 30 * (((((vigor - 30) / 10))));
  } else {
    stat += 0;
  }
  return Math.floor(stat);
}

function updateFocus(mind, level) {
  let stat = 0
  if (level >= 162) {
    stat = 160 + 20 * (((((level + 79 - 240) / 552))));
  } else if (level >= 112) {
    stat = 145 + 15 * (((((level + 79 - 190) / 50))));
  } else if (level >= 72) {
    stat = 105 + 40 * (((((level + 79 - 150) / 40))));
  } else {
    stat = 75 + 30 * (((((level + 79 - 1) / 149))));
  }
  if (mind >= 61) {
    stat += 40 + 10 * (((((mind - 60) / 39))));
  } else if (mind >= 41) {
    stat += 30 + 10 * (((((mind - 40) / 20))));
  } else if (mind >= 31) {
    stat += 30 * (((((mind - 30) / 10))));
  } else {
    stat += 0;
  }
  return Math.floor(stat);
}

function updateRobustness(endurance, level) {
  let stat = 0
  if (level >= 162) {
    stat = 160 + 20 * (((((level + 79 - 240) / 552))));
  } else if (level >= 112) {
    stat = 145 + 15 * (((((level + 79 - 190) / 50))));
  } else if (level >= 72) {
    stat = 105 + 40 * (((((level + 79 - 150) / 40))));
  } else {
    stat = 75 + 30 * (((((level + 79 - 1) / 149))));
  }
  if (endurance >= 61) {
    stat += 40 + 10 * (((((endurance - 60) / 39))));
  } else if (endurance >= 41) {
    stat += 30 + 10 * (((((endurance - 40) / 20))));
  } else if (endurance >= 31) {
    stat += 30 * (((((endurance - 30) / 10))));
  } else {
    stat += 0;
  }
  return Math.floor(stat);
}

function updateEquipLoad(lvl) {
  if (lvl >= 61) {
    return Math.round(10 * (120 + 40 * (((((lvl - 60) / 39)))))) / 10;
  } else if (lvl >= 26) {
    return Math.round(10 * (72 + 48 * (((Math.pow(((lvl - 25) / 35), 1.1)))))) / 10;
  } else {
    return Math.round(10 * (45 + 27 * (((((lvl - 8) / 17)))))) / 10;
  }
}

function updatePhysicalDef(strength, lvl) {
  let stat = 0;
  if (lvl >= 161) {
    stat = (135 + (lvl - 161) / 27.6);
  } else if (lvl >= 92) {
    stat = (120 + (lvl - 91) / 4.667);
  } else if (lvl >= 72) {
    stat = (29 + lvl);
  } else {
    stat = (40 + (lvl + 78) / 2.483);
  }
  if (strength >= 60) {
    stat += (30 + (strength - 60) / 3.9);
  } else if (strength >= 35) {
    stat += (15 + (strength - 40) / 1.333);
  } else if (strength >= 20) {
    stat += (10 + (strength - 30) / 2);
  } else {
    stat += (strength / 3);
  }
  return Math.floor(stat);
}

function updateMagicDef(inteligence, lvl) {
  let stat = 0;
  if (lvl >= 161) {
    stat = (135 + (lvl - 161) / 27.6);
  } else if (lvl >= 92) {
    stat = (120 + (lvl - 91) / 4.667);
  } else if (lvl >= 72) {
    stat = (29 + lvl);
  } else {
    stat = (40 + (lvl + 78) / 2.483);
  }
  if (inteligence >= 60) {
    stat += (60 + (inteligence - 60) / 3.9);
  } else if (inteligence >= 35) {
    stat += (50 + (inteligence - 35) / 2.5);
  } else if (inteligence >= 20) {
    stat += (40 + (inteligence - 20) / 1.5);
  } else {
    stat += (inteligence * 2);
  }
  return Math.floor(stat);
}

function updateFireDef(vigor, lvl) {
  let stat = 0;
  if (lvl >= 161) {
    stat = (135 + (lvl - 161) / 27.6);
  } else if (lvl >= 92) {
    stat = (120 + (lvl - 91) / 4.667);
  } else if (lvl >= 72) {
    stat = (29 + lvl);
  } else {
    stat = (40 + (lvl + 78) / 2.483);
  }
  if (vigor >= 60) {
    stat += (60 + (vigor - 60) / 3.9);
  } else if (vigor >= 40) {
    stat += (vigor);
  } else if (vigor >= 30) {
    stat += (20 + (vigor - 30) * 2);
  } else {
    stat += (vigor / 1.5);
  }
  return Math.floor(stat);
}

function updateLightningDef(lvl) {
  let stat = 0;
  if (lvl >= 161) {
    stat = (135 + (lvl - 161) / 27.6);
  } else if (lvl >= 92) {
    stat = (120 + (lvl - 91) / 4.667);
  } else if (lvl >= 72) {
    stat = (29 + lvl);
  } else {
    stat = (40 + (lvl + 78) / 2.483);
  }
  return Math.floor(stat);
}

function updateHolyDef(arcane, lvl) {
  let stat = 0;
  if (lvl >= 161) {
    stat = (135 + (lvl - 161) / 27.6);
  } else if (lvl >= 92) {
    stat = (120 + (lvl - 91) / 4.667);
  } else if (lvl >= 72) {
    stat = (29 + lvl);
  } else {
    stat = (40 + (lvl + 78) / 2.483);
  }
  if (arcane >= 60) {
    stat += (60 + (arcane - 60) / 3.9);
  } else if (arcane >= 40) {
    stat += (50 + (arcane - 35) / 2.5);
  } else if (arcane >= 30) {
    stat += (40 + (arcane - 20) / 1.5);
  } else {
    stat += (arcane * 2);
  }
  return Math.floor(stat);
}

function updateDiscovery(arcane) {
  return 100 + arcane;
}

function updateVitality(arcane, lvl) {
  let stat = 0
  if (lvl >= 162) {
    stat = 160 + 20 * (((((lvl + 79 - 240) / 552))));
  } else if (lvl >= 112) {
    stat = 145 + 15 * (((((lvl + 79 - 190) / 50))));
  } else if (lvl >= 72) {
    stat = 105 + 40 * (((((lvl + 79 - 150) / 40))));
  } else {
    stat = 75 + 30 * (((((lvl + 79 - 1) / 149))));
  }
  if (arcane >= 61) {
    stat += 40 + 10 * (((((arcane - 60) / 39))));
  } else if (arcane >= 41) {
    stat += 30 + 10 * (((((arcane - 40) / 20))));
  } else if (arcane >= 16) {
    stat += 15 + 15 * (((((arcane - 15) / 25))));
  } else {
    stat += arcane;
  }
  return Math.floor(stat);

}

export {
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
}

