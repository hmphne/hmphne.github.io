import * as React from "react";
import './App.css';
import LatestNews from './components/LatestNews';
import WorldNews from './components/WorldNews';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import FavNews from "./components/FavNews";

export default function App() {

return (
  <Router>
                <Routes>
                    <Route path="/" element={<LatestNews />} exact />
                    <Route path="/all-news" element={<WorldNews />} exact />
                    <Route path="/fav-news" element={<FavNews />} exact />
                </Routes>
  </Router>
)
  
}
