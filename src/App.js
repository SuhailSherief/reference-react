import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<AllMeetups />} />
        <Route path="/new-meetup" exact element={<NewMeetup />} />
        <Route path="/favorites" exact element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
