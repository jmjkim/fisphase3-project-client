import React from 'react';

const EngineDisplayer = ({ engines }) => {
    const arrayOfEngineObj = Object.values( engines )


    return (
        <div className="list_of_engine_container">
            { arrayOfEngineObj.map(( engine, index ) => {
                return (
                    <React.Fragment key={ engine.id }>
                        <div className="list_of_engine_row">
                            <div className="number_of_engine_container">
                                #{ index + 1 }
                            </div>

                            <div className="list_of_engine_non_part_container">
                                <div>
                                    <b>Engine ID:</b> { engine.manufactured_engine_id  }
                                </div>

                                <div>
                                    <b>VIN:</b> { engine.associated_vehicle_vin }
                                </div>

                                <div>
                                    <b>Layout:</b> { engine.engine_layout }
                                </div>

                                <div>
                                    <b>Remark:</b> { engine.remark }
                                </div>
                            </div>

                            <div className="status_indicator">
                                <div className="completed_status">Complete</div>
                                <div className="incompleted_status">Incomplete</div>
                            </div>

                            <div className="list_of_engine_part_grid_container"> 
                                { engine.camshaft_built ? <div className="completed_status">camshaft_built</div> :
                                                          <div className="incompleted_status">camshaft_built</div> }

                                { engine.piston_built ? <div className="completed_status">piston_built</div> :
                                                        <div className="incompleted_status">piston_built</div> }

                                { engine.flywheel_built ? <div className="completed_status">flywheel_built</div> :
                                                          <div className="incompleted_status">flywheel_built</div> }

                                { engine.connecting_rod_built ? <div className="completed_status">connecting_rod_built</div> :
                                                                <div className="incompleted_status">connecting_rod_built</div> }

                                { engine.crankshaft_built ? <div className="completed_status">crankshaft_built</div> :
                                                            <div className="incompleted_status">crankshaft_built</div> }

                                { engine.sump_built ? <div className="completed_status">sump_built</div> :
                                                      <div className="incompleted_status">sump_built</div> }

                                { engine.camshaft_drive_belt_built ? <div className="completed_status">camshaft_drive_belt_built</div> :
                                                                     <div className="incompleted_status">camshaft_drive_belt_built</div> }
                            </div>
                        </div>
                    </React.Fragment>
                )})}
        </div>
    )
}
    // const navigateTo = useNavigate()

    // const destructuredObj = engines.map(({
    //     department_id,
    //     manufactured_engine_id,
    //     associated_vehicle_vin,
    //     engine_layout,
    //     camshaft_built,
    //     piston_built,
    //     flywheel_built,
    //     connecting_rod_built,
    //     crankshaft_built,
    //     sump_built,
    //     camshaft_drive_belt_built,
    //     completed,
    //     remark 
    // }) => {
    //     const destructuringObj = {
    //         department_id,
    //         id: manufactured_engine_id,
    //         vin: associated_vehicle_vin,
    //         layout: engine_layout,
    //         camshaft: camshaft_built,
    //         piston: piston_built,
    //         flywheel: flywheel_built,
    //         connecting_rod: connecting_rod_built,
    //         crankshaft: crankshaft_built,
    //         sump: sump_built,
    //         camshaft_drive_belt: camshaft_drive_belt_built,
    //         completed,
    //         remark 
    //     } 
        

    //     return destructuringObj
    // });

    // const arr_of_keys = [ "id", "vin", "layout", "department_id", "completed", "remark" ]
    
    // return destructuredObj.map(( engine, key ) => {
    //     return (
    //         <div className="list_of_engine_container">
    //             <React.Fragment key={ key }>
    //                 <div className="list_of_engine_row" onClick={() => {
                    
    //                     // pre-fill update form inputs after onClick
    //                     fetch(`http://localhost:9292/engine_department/${engine.id}`)
    //                     .then(r => r.json())
    //                     .then()
    //                     .catch(err => alert(err.message) )}}>
                        
    //                     <div className="list_of_engine_part_grid_container">
    //                         { Object.entries( engine ).map( entry => {
    //                             if ( arr_of_keys.every( keyName => keyName !== entry[0] )) {
    //                                 return ( <div key={ entry[0] }>{ entry[1] ? <div className="completed_status">{ entry[0] }</div> : 
    //                                                                             <div className="incompleted_status">{ entry[0] }</div> }
    //                                          </div> )}})}
    //                     </div>
                                
    //                     <div className="list_of_engine_non_part_container">
    //                         { Object.entries( engine ).map( entry => arr_of_keys.map( keyName => {
    //                             if ( keyName === entry[0] && keyName !== "department_id" && keyName !== "completed" && keyName !== "remark" ) {
    //                                 return ( <div key={ entry[0] }>
    //                                             <span>{ entry[0] }: { entry[1] }</span>
    //                                          </div> )}
    
    //                             if ( keyName === entry[0] && keyName === "remark") {
    //                                 return ( <div key={ entry[0] }>
    //                                             <span>{ entry[0] }</span>: 
    //                                             <br></br>
    //                                             <br></br>
    //                                             <div id="remark_content">{ entry[1] }</div>
    //                                          </div> )}
    //                             }))}
    //                     </div>    
    //                 </div>
    //             </React.Fragment>
    //         </div>
    //         )
    //     }
    // )

export default EngineDisplayer;