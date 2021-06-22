import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoCard from "./TodoCard";
import add_Action from "./js/reducer/AddActionTodo";
import { Button } from "react-bootstrap" 
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const todoList = useSelector((state) => state.todoReducer.todoList);
  const dispatch = useDispatch();
  const [inputState, inputsetState] = useState("");
  const addInput = () => {
    let newTodo = { id: Math.random(), tache: inputState, done: false };
    dispatch(add_Action(newTodo));
    inputsetState("");
  };

  const [doneCheckbox, setDoneCheckbox] = useState(false);
  const [undoneCheckbox, setUndoneCheckbox] = useState(false);

  // const doneTab = doneCheckbox ? todoList.filter((el) => el.done === true) : [];
  // const undoneTab = undoneCheckbox
  //   ? todoList.filter((el) => el.done === false)
  //   : [];

  // const todoTab = [...doneTab, ...undoneTab];

  const todoTab = doneCheckbox
    ? undoneCheckbox
      ? todoList
      : todoList.filter((el) => el.done === true)
    : undoneCheckbox
    ? todoList.filter((el) => el.done === false)
    : todoList;

  return (
    <div className="App">
      <div className="container mt-3">
        <div className="row justify-content-center mt-3">
          <div className="col-lg-4 col-8">
            <input
              type="text"
              value={inputState}
              onChange={(e) => inputsetState(e.target.value)}
            />
            <Button style ={{ margin: "0 2%"}} variant="success" onClick={() => addInput()}>Add to the list</Button>
          </div>

          <div className="col-lg-1 col-1">
            <input
              type="checkbox"
              onChange={(e) => setDoneCheckbox(e.target.checked)}
            />
            <label>Done</label>
          </div>
          <div className="col-lg-1 col-1">
            <input
              type="checkbox"
              onChange={(e) => setUndoneCheckbox(e.target.checked)}
            />
            <label>Undone</label>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-lg-6 col-11">
            {todoTab.map((el) => (
              <TodoCard key={el.id} info={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
