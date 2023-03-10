import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from "./assets/logo.svg";
import Vortex from "./assets/logo.png";
import Home from "./pages/Home";
import Post from "./pages/Post";
const App = () => {
  return (
    <BrowserRouter>
      <header
        className="w-full flex
         justify-between items-center
          bg-white sm:px-8 px-4
           border-b border-b-[#e6ebf4]"
      >
        <Link to="/" className="flex items-center">
          <img
            src={Vortex}
            alt="Vortex-logo"
            className="w-20 object-contain mr-4"
          />
          <h2 className="ml-4 mr-2">Powered By: </h2>
          <img src={logo} alt="logo" className="w-20 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter ml-4 font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Criar
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<Post />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
