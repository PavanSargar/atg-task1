import React from "react";

import NavbarB from './components/NavbarB/NavbarB';
import Header from "./components/Header/Header";
import TabBar from "./components/TabBar/TabBar";

import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarB />
      <Header />
      <TabBar />
    </div>
  );
}

export default App;
