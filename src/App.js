import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {routhPath} from './constants/route';
import CategoryMovies from "./pages/CategoryMovies";
function App() {
  return (
  <Router>
    <Routes>
      <Route path={routhPath.home} element={<Home/>}></Route>
      <Route path={routhPath.categories} element={<CategoryMovies/>}></Route>
      <Route path={routhPath.invalid} element={<Home/>}></Route>
    </Routes>
  </Router>);
}
export default App;
   