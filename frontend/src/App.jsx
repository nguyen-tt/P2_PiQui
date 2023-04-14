/* eslint-disable import/no-unresolved */
import "./App.css";
import Game from "@pages/Game";
import Rules from "@pages/Rules";
import Home from "@pages/Home";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <Game />

      <Home />

      <Rules />

      <AboutUs />
    </div>
  );
}

export default App;
