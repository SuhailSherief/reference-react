import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>All Todo's</h1>
      <Todo title="medicine"/>
      <Todo title="food"/>
      <Todo title="gym"/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
