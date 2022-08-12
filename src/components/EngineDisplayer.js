import React from 'react';
import { useNavigate } from 'react-router-dom';

const EngineDisplayer = ({ engines }) => {
    const navigateTo = useNavigate()
    const arrayOfEngineObj = Object.values( engines )

    return (
        <div className="list_of_engine_container">
            { arrayOfEngineObj.map(( engine, index ) => {
                return (
                    <React.Fragment key={ engine.id }>
                        <div className="list_of_engine_row" onClick={() => {
                                sessionStorage.setItem("storedEngineObjKeys", Object.keys(engine))
                                sessionStorage.setItem("storedEngineObjValues", Object.values(engine))
                                navigateTo(`update`)
                            }}>

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
                                <div className="completed_status">Green: Complete</div>
                                <div className="incompleted_status">Red: Incomplete</div>
                            </div>

                            <div className="list_of_engine_part_dotted_container"> 
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

export default EngineDisplayer;