import { useEffect, useState } from "react";
import Posts from "./pages/Posts";
import { Routes,Route, Router } from "react-router-dom";
import Home from "./pages/Home";


export const BASE_URL = "https://jsonplaceholder.typicode.com/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  )
}


export default App;