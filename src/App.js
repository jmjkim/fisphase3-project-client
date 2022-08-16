import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import DepartmentSelector from "./components/DepartmentSelector";
import EngineDisplayer from "./components/EngineDisplayer";

import DepartmentForm from "./components/DepartmentForm";
import CreateEngineForm from "./components/CreateEngineForm";
import UpdateEngineForm from "./components/UpdateEngineForm";

const App = () => {
  document.title = "EMNF-S"

  const sessionStoredDepartment = sessionStorage.getItem("sessionStoredDepartment")
  const [storedDepartment, setStoredDepartment] = useState(sessionStoredDepartment)

  return (
    <div>
      <h1 className="app_title">Engine Manufacturing Status Manager</h1>

      <Router>
        <DepartmentSelector setStoredDepartment={setStoredDepartment}/>
        
        <Routes>
          <Route path={`/engines/${storedDepartment}`} exact element={<EngineDisplayer storedDepartment={storedDepartment}/>}/> 
          <Route path={`/create`} exact element={<DepartmentForm storedDepartment={storedDepartment}/>}/>
          <Route path={`/engines/${storedDepartment}/create`} exact element={<CreateEngineForm storedDepartment={storedDepartment}/>}/>
          <Route path={`/engines/${storedDepartment}/update`} exact element={<UpdateEngineForm storedDepartment={storedDepartment}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;