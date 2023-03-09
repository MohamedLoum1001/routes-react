import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Developpement from "./Components/Services/Developpement/Developpement";
import Marketing from "./Components/Services/Marketing/Marketing";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />}>
            <Route path='/services/developpement' element={<Developpement />} />
            <Route path='/services/marketing' element={<Marketing />} />
        </Route>
        <Route path='/profil/:id' element={<Profile />} />
      </Routes>

    </div>
  );
}

export default App;
