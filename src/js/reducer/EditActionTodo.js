import { EDIT_TODO } from "../actionTypes";

function edit_Action(payload) {
  return {
    type: EDIT_TODO,
    payload,
  };
}

export default edit_Action;
