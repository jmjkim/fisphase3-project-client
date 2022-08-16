import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import DepartmentSelector from "./components/DepartmentSelector";
import EngineDisplayer from "./components/EngineDisplayer";

import DepartmentForm from "./components/DepartmentForm";
import CreateEngineForm from "./components/CreateEngineForm";
import UpdateEngineForm from "./components/UpdateEngineForm";

const App = () => {
  document.title = "EMNF-S"

  const sessionStoredDepartmentId = sessionStorage.getItem("sessionStoredDepartmentId")
  const [storedDepartmentId, setStoredDepartmentId] = useState(sessionStoredDepartmentId)

  return (
    <div>
      <h1 className="app_title">Engine Manufacturing Status Manager</h1>

      <Router>
        <DepartmentSelector setStoredDepartmentId={setStoredDepartmentId}/>
        <Routes>
          <Route path={`/departments/${storedDepartmentId}/engines`} exact element={<EngineDisplayer storedDepartmentId={storedDepartmentId}/>}/> 
          <Route path={`/departments/create`} exact element={<DepartmentForm storedDepartmentId={storedDepartmentId}/>}/>
          <Route path={`/departments/${storedDepartmentId}/engines/create`} exact element={<CreateEngineForm storedDepartmentId={storedDepartmentId}/>}/>
          <Route path={`/departments/${storedDepartmentId}/engines/update`} exact element={<UpdateEngineForm storedDepartmentId={storedDepartmentId}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;