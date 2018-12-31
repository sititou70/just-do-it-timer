import * as types from "./types";
import cloneDeep from "clone-deep";

const reducers = {
  [types.SET_BEGIN_DATE](old_state, action){
    const state = cloneDeep(old_state);
    state.begin.date = action.value;
    return state;
  },
  [types.SET_BEGIN_TIME](old_state, action){
    const state = cloneDeep(old_state);
    state.begin.time = action.value;
    return state;
  },
  [types.SET_DEADLINE_DATE](old_state, action){
    const state = cloneDeep(old_state);
    state.deadline.date = action.value;
    return state;
  },
  [types.SET_DEADLINE_TIME](old_state, action){
    const state = cloneDeep(old_state);
    state.deadline.time = action.value;
    return state;
  },
  [types.SET_WORK_NAME](old_state, action){
    const state = cloneDeep(old_state);
    state.work_name = action.value;
    return state;
  },
};

const reducer = (old_state, action) =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](old_state, action)
    : old_state;

export default reducer;

