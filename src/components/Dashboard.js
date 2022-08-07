import React from 'react';
import { useState, useEffect } from "react";
import EngineDisplayer from "./EngineDisplayer";


const Dashboard = () => {
    const [ engines, setEngines ] = useState([]);
    

    useEffect(() => {
        fetch("http://localhost:9292/engine_department")
        .then(r => r.json())
        .then(setEngines)
        .catch(err => alert( err.message ))
      }, [])


    return (
        <>
            <h1>Welcome to Engine Manufacturing Status Manager</h1>

            {/* crud component*/}
            {/* search component*/}

            <div className="list_of_engine_main_container">
                <div className="list_of_engine_container">
                    <EngineDisplayer engines={ engines } />
                </div>
            </div>
        </>
    )
};


export default Dashboard;