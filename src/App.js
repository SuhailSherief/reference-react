import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" exact element={<AllMeetups />} />
          <Route path="/new-meetup" exact element={<NewMeetup />} />
          <Route path="/favorites" exact element={<Favorites />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
