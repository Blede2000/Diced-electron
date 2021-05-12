import {
  ADD_CHARACTER,
  UPDATE_CLASS,
  UPDATE_RACE,
  UPDATE_PLAYERNAME,
  UPDATE_ABILITY,
  UPDATE_HP,
  UPDATE_TEMP_HP,
  UPDATE_ARMORCLASS,
  UPDATE_SPEED,
  UPDATE_INITIATIVE,
  UPDATE_SKILL,
  UPDATE_MONEY,
  ADD_EQUIPMENT,
  REMOVE_EQUIPMENT,
  UPDATE_EQUIPMENT,
  ADD_WEAPONS_SPELLS,
  REMOVE_WEAPONS_SPELLS,
  UPDATE_WEAPONS_SPELLS,
} from './characterTypes';

export const addCharacter = (payload) => ({
  type: ADD_CHARACTER,
  payload,
});

//! TOP INFO
export const updateClass = (payload) => ({
  type: UPDATE_CLASS,
  payload,
});
export const updateRace = (payload) => ({
  type: UPDATE_RACE,
  payload,
});
export const updatePlayerName = (payload) => ({
  type: UPDATE_PLAYERNAME,
  payload,
});

//! ABILITIES
export const updateAbility = (payload) => ({
  type: UPDATE_ABILITY,
  payload,
});

// ! COMBAT INFO
export const updateHp = (payload) => ({
  type: UPDATE_HP,
  payload,
});
export const updateTempHp = (payload) => ({
  type: UPDATE_TEMP_HP,
  payload,
});
export const updateArmorClass = (payload) => ({
  type: UPDATE_ARMORCLASS,
  payload,
});
export const updateSpeed = (payload) => ({
  type: UPDATE_SPEED,
  payload,
});
export const updateInitiative = (payload) => ({
  type: UPDATE_INITIATIVE,
  payload,
});

// ! SKILL
export const updateSkill = (payload) => ({
  type: UPDATE_SKILL,
  payload,
});

// ! MONEY
export const updateMoney = (payload) => ({
  type: UPDATE_MONEY,
  payload,
});

// ! EQUIPMENT
export const addEquipment = (payload) => ({
  type: ADD_EQUIPMENT,
  payload,
});
export const removeEquipment = (payload) => ({
  type: REMOVE_EQUIPMENT,
  payload,
});
export const updateEquipment = (payload) => ({
  type: UPDATE_EQUIPMENT,
  payload,
});

// ! SPELLS & WEAPONS
export const addSpellsWeapons = (payload) => ({
  type: ADD_WEAPONS_SPELLS,
  payload,
});
export const removeSpellsWeapons = (payload) => ({
  type: REMOVE_WEAPONS_SPELLS,
  payload,
});
export const updateSpellsWeapons = (payload) => ({
  type: UPDATE_WEAPONS_SPELLS,
  payload,
});
