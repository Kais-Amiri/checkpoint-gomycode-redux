import { ADD_TODO } from "../actionTypes";

function add_Action(payload) {
  return {
    type: ADD_TODO,
    payload,
  };
}
export default add_Action;
