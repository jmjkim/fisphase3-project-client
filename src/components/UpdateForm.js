import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateForm = () => {
    const navigateTo = useNavigate()
    const engineKeys = [ 'id', 'department_id', 'manufactured_engine_id', 
                         'associated_vehicle_vin', 'engine_layout', 'camshaft_built', 
                         'piston_built', 'flywheel_built', 'connecting_rod_built', 
                         'crankshaft_built', 'sump_built', 'camshaft_drive_belt_built', 
                         'completed', 'remark' ]

    // const handleCheckedChange = ( e ) => {
    //     // setFormData({
    //     //     ...formData,
    //     //     []
    //     // })
    // }

    // const handleUpdateChange = ( e ) => {
    //     setUpdatedFormData({
    //         ...engineObj,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleUpdateSubmit = ( e ) => {
    //     e.preventDefault()

    //     // setUpdatedFormData({
    //     //     ...engineObj,
    //     //     [e.target.name]: e.target.value
    //     // })

        
    //     // fetch("http://localhost:9292/engine_department", {
    //         //     method: "PATCH",
    //         //     headers: { "Content-Type": "application/json" },
    //         //     body: JSON.stringify() })
    //         //     .then(r => r.json())
    //         //     .then(() => alert( "Engine Status Updated" ))
    //         //     .catch(err => alert( err.message ))
    //     }
    
    return (
            <form>
                <div className="update_engine_form">
                    <b>Update Engine</b>
                    <br></br>
                    
                    { engineKeys.map( key => { 
                        if ( key === "id" || key === "department_id" )
                            return null

                        else if ( key === "manufactured_engine_id" || key === "associated_vehicle_vin" || key === "engine_layout" || key === "remark") 
                            return <label key={ key }>{ key }: 
                               <br></br>
                               <input id={ `update_engine_${ key }_input` } name={ key } type="text" /></label> 

                        else 
                            return <label>{ key }<input id={ `update_engine_${ key }_input` } name={ key } type="checkbox" /></label> })}

                    <br></br>
                    <input type="submit" value="Update" />
                    <input type="button" value="Back to Dashboard" onClick={() => navigateTo( "/engine_department" )} />
                </div>
            </form>
    )
}

export default UpdateForm;
