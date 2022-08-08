import React from 'react';


const EngineDisplayer = ({ engines }) => {
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
        camshaft_drvie_belt_built,
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
            camshaft_drive_belt: camshaft_drvie_belt_built,
            completed,
            remark 
        } 
        

        return destructuringObj
    });

    
    return destructuredObj.map(( engine, key ) => {
        return (
            <React.Fragment key={ key }>
                <div className="list_of_engine_row">
                    <div><b>ID</b>: {engine.id}</div>
                    <div><b>VIN</b>: {engine.vin}</div>
                    <div><b>Layout</b>: {engine.layout}</div>


                <div className="list_of_engine_row_grid_container">
                    {engine.camshaft ? <div className="completed_status">camshaft</div> : <div className="incompleted_status">camshaft</div>}
                    {engine.piston ? <div className="completed_status">piston</div> : <div className="incompleted_status">piston</div>}
                    {engine.flywheel ? <div className="completed_status">flywheel</div> : <div className="incompleted_status">flywheel</div>}
                    {engine.connecting_rod ? <div className="completed_status">connecting_rod</div> : <div className="incompleted_status">connecting_rod</div>}
                    {engine.crankshaft ? <div className="completed_status">crankshaft</div> : <div className="incompleted_status">crankshaft</div>}
                    {engine.sump ? <div className="completed_status">sump</div> : <div className="incompleted_status">sump</div>}
                    {engine.camshaft_drive_belt ? <div className="completed_status">camshaft_drive_belt</div> : <div className="incompleted_status">camshaft_drive_belt</div>}
                </div>


                    <div><b>Remark</b>: {engine.remark}</div>
                </div>
            </React.Fragment>
            )
        }
    )
}


export default EngineDisplayer;