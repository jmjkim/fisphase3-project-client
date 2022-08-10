import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateForm from "./components/CreateForm";
import EngineDisplayer from "./components/EngineDisplayer";
import UpdateForm from "./components/UpdateForm";

const App = () => {
  document.title = "EMNF-S Manager"
  
  const [ engines, setEngines ] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/engine_department")
      .then(r => r.json())
      .then(setEngines)
      .catch(err => alert( err.message ))
    }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/engine_department" exact element={ <EngineDisplayer engines={ engines } /> } />
          <Route path="/engine_department/create" exact element={ <CreateForm />} />
          <Route path="/engine_department/edit" exact element={ <UpdateForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;