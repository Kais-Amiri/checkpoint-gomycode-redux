import { DELETE_TODO } from "../actionTypes";

function delete_Action(payload) {
  return {
    type: DELETE_TODO,
    payload,
  };
}
export default delete_Action;
