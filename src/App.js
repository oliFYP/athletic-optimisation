import React, { lazy } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Pages/HomePage"));

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
