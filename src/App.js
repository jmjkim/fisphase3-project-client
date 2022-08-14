import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import DepartmentSelector from "./components/DepartmentSelector";
import EngineDisplayer from "./components/EngineDisplayer";
import CreateEngineForm from "./components/CreateEngineForm";
import UpdateEngineForm from "./components/UpdateEngineForm";

const App = () => {
  document.title = "EMNF-S"

  const storedDepartment = sessionStorage.getItem("storedDepartment")

  return (
    <React.Fragment>
      <Router>
        <DepartmentSelector/>
        
        <Routes>
          <Route path={`/engine_department/engines/${storedDepartment}`} exact element={<EngineDisplayer storedDepartment={storedDepartment}/>}/> 
          <Route path={`/engine_department/engines/${storedDepartment}/create`} exact element={<CreateEngineForm storedDepartment={storedDepartment}/>}/>
          <Route path={`/engine_department/engines/${storedDepartment}/update`} exact element={<UpdateEngineForm storedDepartment={storedDepartment}/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;