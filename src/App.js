import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import EngineDisplayer from "./components/EngineDisplayer";
import CreateForm from "./components/CreateForm";
import UpdateForm from "./components/UpdateForm";

const App = () => {
  document.title = "EMNF-S"

  const [ engines, setEngines ] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/engine_department")
      .then(r => r.json())
      .then(setEngines)
      .catch(err => alert( err.message ))
    }, [])

  return (
    <React.Fragment>
      <h1 className="app_title">Engine Manufacturing Status Manager</h1>

      <Router>
        <NavBar />
        <Routes>
          <Route path="/engine_department" exact element={ <EngineDisplayer engines={ engines } />} />
          <Route path="/engine_department/create" exact element={ <CreateForm />} />
          <Route path="/engine_department/update" exact element={ <UpdateForm />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;