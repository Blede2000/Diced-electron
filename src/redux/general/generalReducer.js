import { SET_CHARACTER } from './generalType';

const initialState = {
  selectedCharacter: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHARACTER:
      return { ...state, selectedCharacter: payload.characterId };
    default:
      return state;
  }
};
