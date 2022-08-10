import React from "react";
import Devices from "./components/Devices";
import Download from "./components/Download";
import Everywhere from "./components/Everywhere";
import Main from "./components/Main";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Test from "./components/Test";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/everywhere" element={<Everywhere />} />
        <Route path="/download" element={<Download />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/search" element={<MovieList />} />
        <Route path="/formation" element={<Test />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
