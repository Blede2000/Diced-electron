import { SET_CHARACTER } from './generalType';

// eslint-disable-next-line import/prefer-default-export
export const setCharacter = (payload) => ({
  type: SET_CHARACTER,
  payload,
});
