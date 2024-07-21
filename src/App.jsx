import { useState } from "react";
import NavBar from "./components/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Approach from "./components/Approach/Approach";
import Benefits from "./components/Benefits/Benefits";
import SocialLinks from "./components/SocialLinks";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Products />
      <Approach />
      <Benefits />
      <SocialLinks />
    </>
  );
}

export default App;
