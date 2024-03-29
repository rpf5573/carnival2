import { UPDATE_PUZZLE_BOX_COUNT, UPDATE_ENIAC_WORDS, UPDATE_RANDOM_ENIAC_WORDS, UPDATE_LASTBOX_URL, UPDATE_LASTBOX_STATE, UPDATE_BOX_TENT_STATE, UPDATE_POINT_TENT_STATE } from '../actions/types';

export const updatePuzzleBoxCount = (puzzleBoxCount) => dispatch => {
  dispatch({
    type: UPDATE_PUZZLE_BOX_COUNT,
    payload: puzzleBoxCount
  });
}

export const updateEniacWords = (eniacWords) => dispatch => {
  dispatch({
    type: UPDATE_ENIAC_WORDS,
    payload: eniacWords
  });
}

export const updateRandomEniacWords = (randomEniacWords) => dispatch => {
  dispatch({
    type: UPDATE_RANDOM_ENIAC_WORDS,
    payload: randomEniacWords
  });
}

export const updateLastBoxUrl = (url) => dispatch => {
  dispatch({
    type: UPDATE_LASTBOX_URL,
    payload: url
  });
}

export const updateLastBoxState = (state) => dispatch => {
  dispatch({
    type: UPDATE_LASTBOX_STATE,
    payload: state
  });
}

export const updateBoxTentState = (state) => dispatch => {
  dispatch({
    type: UPDATE_BOX_TENT_STATE,
    payload: state
  });
}

export const updatePointTentState = (state) => dispatch => {
  dispatch({
    type: UPDATE_POINT_TENT_STATE,
    payload: state
  });
}