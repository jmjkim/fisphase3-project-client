import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NavBar from "./components/Navbar";
import EngineDisplayer from "./components/EngineDisplayer";
import CreateForm from "./components/CreateForm";
import UpdateForm from "./components/UpdateForm";

const App = () => {
  document.title = "EMNF-S"

  return (
    <React.Fragment>
      <h1 className="app_title">Engine Manufacturing Status Manager</h1>

      <Router>
        <NavBar/>
        <Routes>
          <Route path="/engine_department" exact element={<EngineDisplayer/>}/>
          <Route path="/engine_department/create" exact element={<CreateForm/>}/>
          <Route path="/engine_department/update" exact element={<UpdateForm/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;