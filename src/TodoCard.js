import React from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import delete_Action from "./js/reducer/DeleteActionTodo";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import edit_Action from "./js/reducer/EditActionTodo";
import done_undone_Action from "./js/reducer/DoneUndoneAction";

function TodoCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputModalState, setInputModalState] = useState("");

  const dispatch = useDispatch();

  const changeTodo = () => {
    let editObject = {
      id: props.info.id,
      tache: inputModalState,
    };
    dispatch(edit_Action(editObject));
    setInputModalState("");
    handleClose();
  };

  const done = useSelector((state) => state.todoReducer.todoList).find(
    (el) => el.id === props.info.id
  ).done;

  return (
    <div style={{ border: "1px solid blue" }}>
      <h3
        style={{ textDecoration: done ? "line-through" : "none" }}
        onClick={() => dispatch(done_undone_Action(props.info.id))}
      >
        {props.info.tache}
      </h3>
      <AiOutlineDelete onClick={() => dispatch(delete_Action(props.info.id))} />
      <>
        <FiEdit onClick={handleShow} />

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              onChange={(input) => setInputModalState(input.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={changeTodo}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default TodoCard;
