import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./Components/Cart";

import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
