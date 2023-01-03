import { useState } from "react"
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo({title}) {
    const [ showModal, setModal ] = useState(false);

    function deleteHandler()
    {
         setModal(true);
    }

  return (
    <div className="card">
        <h2>{title}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        { showModal && <Modal /> }
        { showModal && <Backdrop/> }
    </div>
  )
}

export default Todo