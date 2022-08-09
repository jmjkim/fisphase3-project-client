import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = () => {
  document.title = "EMNF-S Manager"

  return (
    <>
      <Router>
        <Routes>
          <Route path='/engine_department' exact element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;