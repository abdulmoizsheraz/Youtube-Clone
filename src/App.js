import { useState } from "react";
import {
  BrowserRouter as Router,

  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./Com/Navbar";
import Feed from "./Com/Feed";
import VideoDetail from "./Com/VideoDetail";
import './App.css'

export default function App() {
 

  return (
 <>
 <Router>
 <Navbar/>
 <Routes>
  <Route  exact path="/" element={<Feed/>}/>
  <Route  exact path="/video/:id" element={<VideoDetail/>}/>
 </Routes>
 </Router>

 </>
  );
}
