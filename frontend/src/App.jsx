/* eslint-disable import/no-unresolved */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import "./App.css";
import Game from "@pages/Game";
import NavBar from "@components/NavBar/NavBar";
import Rules from "@pages/Rules";
import Form from "@pages/Form";
import Cheers from "@pages/Cheers";
import AboutUs from "@pages/AboutUs";
import Footer from "@components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="rules" element={<Rules />} />
          <Route path="contact" element={<Form />} />
          <Route path="cheers" element={<Cheers />} />
          <Route path="aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
