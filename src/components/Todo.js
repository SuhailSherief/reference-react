function Todo({title}) {
    function deleteHandler()
    {
        console.log("Delete request")
        console.log(title)
    }

  return (
    <div className="card">
        <h2>{title}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
    </div>
  )
}

export default Todo