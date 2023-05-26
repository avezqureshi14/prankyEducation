import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import PlacementTable from "./components/PlacementList";
import Placements from "./components/Placements";
import Staff from "./components/Staff";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Registration";
function App() {
  return (
    <div className="App">
    <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
