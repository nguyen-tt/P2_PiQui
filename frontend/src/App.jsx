import Footer from "@components/Footer/Footer";
import NavBar from "@components/NavBar/NavBar";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
