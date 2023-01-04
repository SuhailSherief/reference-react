function Modal({cancel, confirm}) {

  return (
    <div className="modal">
        <p>Are you sure ?</p>
        <button className="btn btn--alt" onClick={cancel}>cancel</button>
        <button className="btn" onClick={confirm}>confirm</button>
    </div>
  )
}

export default Modal