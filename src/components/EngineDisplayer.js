import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Navbar from "./Navbar"


const EngineDisplayer = ({storedDepartmentId}) => {
    const [engines, setEngines] = useState([])
    const [searchedEngineId, setSearchedEngineId] = useState("")

    useEffect(() => {
        fetch(`http://localhost:9292/departments/${storedDepartmentId}/engines`)
        .then(r => r.json())
        .then(setEngines)
        .catch(err => alert(err.message))
      }, [storedDepartmentId])

    const handleSearch = (e) => {
        setSearchedEngineId(e.target.value)
    }

    const searchedEngine = [...engines].filter(engine => engine.manufactured_engine_id === searchedEngineId)
  
    if (engines.length === 0) {
        return (
            <>
                <Navbar storedDepartmentId={storedDepartmentId} handleSearch={handleSearch}/>
                <h2>No engine to display</h2>
            </>
        )
    }

    else
        return (
            <> 
                <Navbar storedDepartmentId={storedDepartmentId} setSearchedEngineId={setSearchedEngineId} handleSearch={handleSearch}/>

                <div className="list_of_engine_container">
                    {Object.values(searchedEngine.length > 0 ? searchedEngine : engines).map((engine, index) => {
                        return (
                            <div key={engine.id}>
                                <Link to={`/departments/${storedDepartmentId}/engines/update`} className="link">
                                    <div className="engine_container" onClick={() => {
                                            sessionStorage.setItem("storedEngineObjKeys", Object.keys(engine))
                                            sessionStorage.setItem("storedEngineObjValues", Object.values(engine))
                                        }}>

                                        <div className="engine_container_number">
                                            <b>Engine Number #{index + 1}</b>
                                        </div>

                                        <div className="engine_container_non_part_container">
                                            <div><b>Engine ID:</b> <span id="eid">{engine.manufactured_engine_id}</span></div>
                                            <div><b>VIN:</b> {engine.associated_vehicle_vin}</div>
                                            <div><b>Layout:</b> {engine.engine_layout}</div>
                                            <div><b>Remark:</b> {engine.remark}</div>
                                        </div>

                                        <div className="status_indicator">
                                            <div className="completed_status">Green: Complete</div>
                                            <div className="incompleted_status">Red: Incomplete</div>
                                        </div>

                                        <div className="engine_container_dotted_container"> 
                                            {engine.camshaft_built ? <div className="completed_status">camshaft_built</div> :
                                                                     <div className="incompleted_status">camshaft_built</div>}

                                            {engine.piston_built ? <div className="completed_status">piston_built</div> :
                                                                   <div className="incompleted_status">piston_built</div>}

                                            {engine.flywheel_built ? <div className="completed_status">flywheel_built</div> :
                                                                     <div className="incompleted_status">flywheel_built</div>}

                                            {engine.connecting_rod_built ? <div className="completed_status">connecting_rod_built</div> :
                                                                           <div className="incompleted_status">connecting_rod_built</div>}

                                            {engine.crankshaft_built ? <div className="completed_status">crankshaft_built</div> :
                                                                       <div className="incompleted_status">crankshaft_built</div>}

                                            {engine.sump_built ? <div className="completed_status">sump_built</div> :
                                                                 <div className="incompleted_status">sump_built</div>}

                                            {engine.camshaft_drive_belt_built ? <div className="completed_status">camshaft_drive_belt_built</div> :
                                                                                <div className="incompleted_status">camshaft_drive_belt_built</div>}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )})}
                </div>
            </>
            )
}

export default EngineDisplayer;