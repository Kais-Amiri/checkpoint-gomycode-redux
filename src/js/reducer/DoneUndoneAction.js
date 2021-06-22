import { DONE_UNDONE_TODO } from "../actionTypes";

function done_undone_Action(payload) {
  return {
    type: DONE_UNDONE_TODO,
    payload,
  };
}

export default done_undone_Action;
