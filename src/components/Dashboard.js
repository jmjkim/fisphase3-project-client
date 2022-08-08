import { useState, useEffect } from "react";

import EngineDisplayer from "./EngineDisplayer";
import CreateForm from './CreateForm';
import UpdateForm from './UpdateForm';

const Dashboard = () => {
    const [ engines, setEngines ] = useState([])
    const [ updateFormData, setUpdateFormData ] = useState({})

    useEffect(() => {
        fetch("http://localhost:9292/engine_department")
        .then(r => r.json())
        .then(setEngines)
        .catch(err => alert( err.message ))
      }, [])

    return (
        <>
            <h1>Welcome to Engine Manufacturing Status Manager</h1>

            {/* search component*/}
            <div className="engine_manager_form_container">
                <CreateForm />
                <UpdateForm updateFormData={ updateFormData } />
            </div>
            
            <div className="list_of_engine_container">
                <EngineDisplayer engines={ engines } setUpdateFormData={ setUpdateFormData } />
            </div>
        </>
    )
};

export default Dashboard;