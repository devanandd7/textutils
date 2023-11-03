import Nav from "./conponents/Nav";
import TextForm from "./conponents/TextForm";
import About from "./conponents/About";
import React, { useState,Component } from "react"; // importing hooks as state



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("white");

  const toggleMode = () => {
    if (mode === "white") {
      setMode("dark");
      document.body.style.background = "gray";
      document.body.style.color = "white";
    } else {
      setMode("white");
      document.body.style.background = "#c2def9";
      document.body.style.color = "black";
    }
  };

  return (
    <>

      <Router>


        <Nav title="David" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/' element={<TextForm />}></Route>


        </Routes>




      </Router>




    </>
  );
}

export default App;


// {/* * this is main file - app.js  */}
//
//
// <About />

//  {/* nav */}
//  <Nav title="David" mode={mode} toggleMode={toggleMode} />

//  {/* home */}
//  <div className={`container  `}>
//    <TextForm heading="enter the text to analize" />
//  </div>

//  {/* about */}
