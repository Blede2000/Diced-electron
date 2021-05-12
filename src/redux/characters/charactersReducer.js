import { v4 as uuidv4 } from 'uuid';
import {
  ADD_CHARACTER,
  UPDATE_PLAYERNAME,
  UPDATE_CLASS,
  UPDATE_RACE,
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

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHARACTER:
      return {
        [uuidv4()]: {
          characterName: payload.characterName,
          class: '',
          race: '',
          playerName: '',
          imageUri: payload.imageUri,
          combatInfo: {
            hitPoints: 0,
            tempHp: 0,
            armorClass: 0,
            speed: 30,
            initiative: 0,
          },
          abilities: {
            strength: {
              abilityName: 'Strength',
              abilityScore: '00',
              modifier: '0',
              proficiency: false,
              forcedModifier: false,
            },
            dexterity: {
              abilityName: 'Dexterity',
              abilityScore: '00',
              modifier: '0',
              proficiency: false,
              forcedModifier: false,
            },
            constitution: {
              abilityName: 'Constitution',
              abilityScore: '00',
              modifier: '0',
              proficiency: false,
              forcedModifier: false,
            },
            wisdom: {
              abilityName: 'Wisdom',
              abilityScore: '00',
              modifier: '0',
              proficiency: false,
              forcedModifier: false,
            },
            intelligence: {
              abilityName: 'Intelligence',
              abilityScore: '00',
              modifier: '0',
              proficiency: false,
              forcedModifier: false,
            },
            charisma: {
              abilityName: 'Charisma',
              abilityScore: '00',
              modifier: '0',
              proficiency: false,
              forcedModifier: false,
            },
          },
          skills: {
            acrobatics: {
              skillName: 'Acrobatics',
              skillAbility: 'Dex',
              abilityId: 'dexterity',
              proficiency: 0,
            },
            animalHandling: {
              skillName: 'Animal Handling',
              skillAbility: 'Wis',
              abilityId: 'wisdom',
              proficiency: 0,
            },
            arcana: {
              skillName: 'Arcana',
              skillAbility: 'Int',
              abilityId: 'intelligence',
              proficiency: 0,
            },
            athletics: {
              skillName: 'Athletics',
              skillAbility: 'Str',
              abilityId: 'strength',
              proficiency: 0,
            },
            deception: {
              skillName: 'Deception',
              skillAbility: 'Cha',
              abilityId: 'charisma',
              proficiency: 0,
            },
            history: {
              skillName: 'History',
              skillAbility: 'Int',
              abilityId: 'intelligence',
              proficiency: 0,
            },
            insight: {
              skillName: 'Insight',
              skillAbility: 'Wis',
              abilityId: 'wisdom',
              proficiency: 0,
            },
            intimidation: {
              skillName: 'Intimidation',
              skillAbility: 'Cha',
              abilityId: 'charisma',
              proficiency: 0,
            },
            investigation: {
              skillName: 'Investigation',
              skillAbility: 'Int',
              abilityId: 'intelligence',
              proficiency: 0,
            },
            medicine: {
              skillName: 'Medicine',
              skillAbility: 'Wis',
              abilityId: 'wisdom',
              proficiency: 0,
            },
            nature: {
              skillName: 'Nature',
              skillAbility: 'Int',
              abilityId: 'intelligence',
              proficiency: 0,
            },
            perception: {
              skillName: 'Perception',
              skillAbility: 'Wis',
              abilityId: 'wisdom',
              proficiency: 0,
            },
            performance: {
              skillName: 'Performance',
              skillAbility: 'Cha',
              abilityId: 'charisma',
              proficiency: 0,
            },
            persuassion: {
              skillName: 'Persuasion',
              skillAbility: 'Cha',
              abilityId: 'charisma',
              proficiency: 0,
            },
            religion: {
              skillName: 'Religion',
              skillAbility: 'Int',
              abilityId: 'intelligence',
              proficiency: 0,
            },
            sleightOfHand: {
              skillName: 'Sleight of Hand',
              skillAbility: 'Dex',
              abilityId: 'dexterity',
              proficiency: 0,
            },
            stealth: {
              skillName: 'Stealth',
              skillAbility: 'Dex',
              abilityId: 'dexterity',
              proficiency: 0,
            },
            survival: {
              skillName: 'Survival',
              skillAbility: 'Wis',
              abilityId: 'wisdom',
              proficiency: 0,
            },
          },
          equipment: {
            money: {
              copper: '00',
              silver: '00',
              electrum: '00',
              gold: '00',
              platinum: '00',
            },
            items: [],
          },
          spellsAndWeapons: [],
        },
        ...state,
      };
    case UPDATE_PLAYERNAME:
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          playerName: payload.playerName,
        },
      };
    case UPDATE_CLASS:
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          class: payload.class,
        },
      };
    case UPDATE_RACE:
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          race: payload.race,
        },
      };
    case UPDATE_ABILITY:
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          abilities: {
            ...state[payload.characterId].abilities,
            [payload.abilityId]: {
              abilityName: payload.abilityName,
              abilityScore: payload.abilityScore,
              modifier: payload.forcedModifier
                ? payload.modifier
                : // eslint-disable-next-line radix
                  // eslint-disable-next-line prettier/prettier
                  // eslint-disable-next-line radix
                  Math.floor((parseInt(payload.abilityScore) - 10) / 2),
              proficiency: payload.proficiency,
            },
          },
        },
      };
    case UPDATE_HP:
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          combatInfo: {
            ...state[payload.characterId].combatInfo,
            hitPoints: payload.hitPoints,
          },
        },
      };
    case UPDATE_TEMP_HP:
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          combatInfo: {
            ...state[payload.characterId].combatInfo,
            tempHp: payload.tempHp,
          },
        },
      };
    case UPDATE_ARMORCLASS:
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          combatInfo: {
            ...state[payload.characterId].combatInfo,
            armorClass: payload.armorClass,
          },
        },
      };
    case UPDATE_SPEED:
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          combatInfo: {
            ...state[payload.characterId].combatInfo,
            speed: payload.speed,
          },
        },
      };
    case UPDATE_INITIATIVE:
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          combatInfo: {
            ...state[payload.characterId].combatInfo,
            initiative: payload.initiative,
          },
        },
      };
    case UPDATE_SKILL:
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          skills: {
            ...state[payload.characterId].skills,
            [payload.skillsId]: {
              skillName: payload.skillName,
              skillAbility: payload.skillAbility,
              abilityId: payload.abilityId,
              proficiency: payload.proficiency,
            },
          },
        },
      };
    case UPDATE_MONEY:
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          equipment: {
            ...state[payload.characterId].equipment,
            money: {
              ...state[payload.characterId].equipment.money,
              [payload.moneyId]: payload.money,
            },
          },
        },
      };
    case ADD_EQUIPMENT:
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          equipment: {
            ...state[payload.characterId].equipment,
            items: [
              ...state[payload.characterId].equipment.items,
              {
                itemId: uuidv4(),
                itemName: payload.itemName,
                amount: payload.amount,
              },
            ],
          },
        },
      };
    case REMOVE_EQUIPMENT:
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          equipment: {
            ...state[payload.characterId].equipment,
            items: state[payload.characterId].equipment.items.filter(
              (item) => item.itemId !== payload.itemId
            ),
          },
        },
      };
    case UPDATE_EQUIPMENT:
      // eslint-disable-next-line no-case-declarations
      const { items } = state[payload.characterId].equipment;
      // eslint-disable-next-line no-case-declarations
      const newItems = items.map((item) =>
        // eslint-disable-next-line eqeqeq
        item.itemId == payload.itemId
          ? {
              itemId: item.itemId,
              itemName: payload.itemName,
              amount: payload.amount,
            }
          : item
      );
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          equipment: {
            ...state[payload.characterId].equipment,
            items: newItems,
          },
        },
      };
    case ADD_WEAPONS_SPELLS:
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          spellsAndWeapons: [
            ...state[payload.characterId].spellsAndWeapons,
            {
              spellWeaponId: uuidv4(),
              spellWeaponName: payload.spellWeaponName,
              damageType: payload.damageType,
              damageDice: payload.damageDice,
              diceAmount: payload.diceAmount,
              spellWeaponDescription: payload.spellWeaponDescription,
            },
          ],
        },
      };
    case REMOVE_WEAPONS_SPELLS:
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          spellsAndWeapons: state[payload.characterId].spellsAndWeapons.filter(
            (item) => item.spellWeaponId !== payload.spellWeaponId
          ),
        },
      };
    case UPDATE_WEAPONS_SPELLS:
      // eslint-disable-next-line no-case-declarations
      const spellWeapon = state[payload.characterId].spellsAndWeapons;
      // eslint-disable-next-line no-case-declarations
      const newSpellWeapon = spellWeapon.map((item) =>
        // eslint-disable-next-line eqeqeq
        item.spellWeaponId == payload.spellWeaponId
          ? {
              spellWeaponId: item.spellWeaponId,
              spellWeaponName: payload.spellWeaponName,
              damageType: payload.damageType,
              damageDice: payload.damageDice,
              diceAmount: payload.diceAmount,
              spellWeaponDescription: payload.spellWeaponDescription,
            }
          : item
      );
      return {
        ...state,
        [payload.characterId]: {
          ...state[payload.characterId],
          spellsAndWeapons: newSpellWeapon,
        },
      };
    default:
      return state;
  }
};
// What is the result that I want?
/**
 * {
 *  id: {
 *      name: something
 *      address: something
 *  }
 * }
 *
 */
