import React from 'react';


const EngineDisplayer = ({ engines }) => {
    return engines.map( engine => {
        return (
            <React.Fragment key={ engine.id }>
                <div className="list_of_engine_row">
                    <span>ID: { engine.manufactured_engine_id }</span>
                    <span>VIN: { engine.associated_vehicle_vin }</span>
                    <span>Layout: { engine.engine_layout }</span>
                    <span>Completed: { engine.completed ? "Completed" : "In-Progress" }</span>
                    <span>Remark: { engine.remark }</span>
                </div>
            </React.Fragment>
            )
        }
    )
}


export default EngineDisplayer;