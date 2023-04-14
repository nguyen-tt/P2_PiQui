
import Footer from "@components/Footer/Footer";
import NavBar from "@components/NavBar/NavBar";
import Home from "./pages/Home";

/* eslint-disable import/no-unresolved */
import "./App.css";
import Game from "@pages/Game";
import Rules from "@pages/Rules";
import Home from "@pages/Home";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">

      <NavBar />
      
      <Footer />

      <Game />

      <Home />

      <Rules />

      <AboutUs />

    </div>
  );
}

export default App;
