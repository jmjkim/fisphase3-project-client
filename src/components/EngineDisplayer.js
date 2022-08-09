import React from 'react';

const EngineDisplayer = ({ engines, setUpdateFormData }) => {
    const destructuredObj = engines.map(({ 
        department_id,
        manufactured_engine_id,
        associated_vehicle_vin,
        engine_layout,
        camshaft_built,
        piston_built,
        flywheel_built,
        connecting_rod_built,
        crankshaft_built,
        sump_built,
        camshaft_drive_belt_built,
        completed,
        remark 
    }) => {
        const destructuringObj = {
            department_id,
            id: manufactured_engine_id,
            vin: associated_vehicle_vin,
            layout: engine_layout,
            camshaft: camshaft_built,
            piston: piston_built,
            flywheel: flywheel_built,
            connecting_rod: connecting_rod_built,
            crankshaft: crankshaft_built,
            sump: sump_built,
            camshaft_drive_belt: camshaft_drive_belt_built,
            completed,
            remark 
        } 
        

        return destructuringObj
    });

    const arr_of_keys = [ "id", "vin", "layout", "department_id", "completed", "remark" ]
    
    return destructuredObj.map(( engine, key ) => {
        return (
            <React.Fragment key={ key }>
                <div className="list_of_engine_row" onClick={() => {
                    fetch(`http://localhost:9292/engine_department/${engine.id}`)
                    .then(r => r.json())
                    .then(engine => setUpdateFormData(engine))
                    .catch(err => alert( err.message ))
                }}>

                    <div className="list_of_engine_part_grid_container">
                        { Object.entries( engine ).map( entry => {
                            if ( arr_of_keys.every( keyName => keyName !== entry[0] )) {
                                return ( <div key={ entry[0] }>{ entry[1] ? <div className="completed_status">{ entry[0] }</div> : 
                                                                            <div className="incompleted_status">{ entry[0] }</div> }
                                         </div> )}})}
                    </div>
                            
                    <div className="list_of_engine_non_part_container">
                        { Object.entries( engine ).map( entry => arr_of_keys.map( keyName => {
                            if ( keyName === entry[0] && keyName !== "id" && keyName !== "department_id" && keyName !== "completed" && keyName !== "remark" ) {
                                return ( <div key={ entry[0] }>
                                            <span style={{ "font-weight": "bold" }}>{ entry[0] }</span>: { entry[1] }
                                         </div> )}

                            if ( keyName === entry[0] && keyName === "remark") {
                                return ( <div key={ entry[0] }>
                                            <span style={{ "font-weight": "bold" }}>{ entry[0] }</span>: 
                                            <br></br><br></br>
                                            <div id="remark_content">{ entry[1] }</div>
                                         </div> )}
                            }))}
                    </div>    
                </div>
            </React.Fragment>
            )
        }
    )
}

export default EngineDisplayer;