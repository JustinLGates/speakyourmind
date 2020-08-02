import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App d-flex flex-column vh-100">
      <Header className="container-fluid bg-dark" />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
