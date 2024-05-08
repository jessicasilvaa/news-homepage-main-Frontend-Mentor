import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import New from "./components/New";
import Card from "./components/Card";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="hero-container">
        <Hero />
        <New />
      </div>
      <Card />
    </div>
  );
}

export default App;
