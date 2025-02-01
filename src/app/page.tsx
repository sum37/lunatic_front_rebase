import React from "react";
import Header from "../components/Header";
import Logo from "../../public/logo.png";
import Image from "next/image";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="background-image">
        <div className="overlay-box">
          <Image className="logo-image" alt="logo" src={Logo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
