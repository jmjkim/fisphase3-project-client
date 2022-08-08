import React from "react";
import { useState } from "react";

const UpdateForm = ( updateFormData ) => {
    const [ formData, setFormData ] = useState( updateFormData
        // manufactured_engine_id: "",
        // associated_vehicle_vin: "",
        // engine_layout: "",
        // camshaft_built: null,
        // piston_built: null,
        // flywheel_built: null,
        // connecting_rod_built: null,
        // crankshaft_built: null,
        // sump_built: null,
        // camshaft_drive_belt_built: null,
        // completed: null,
        // remark: ""
    )

    console.log(updateFormData)

    const [ checked, setChecked ] = useState( false )

    const handleCheckChange = ( e ) => {

    }

    const handleUpdateChange = ( e ) => {
        // setFormData({
        //     ...updateFormData,
        //     [e.target.name]: e.target.value
        // })
    }

    const handleUpdateSubmit = ( e ) => {
        e.preventDefault()

        fetch("http://localhost:9292/engine_department", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)})
            // .then(r => r.json())
            .then(() => alert("Engine Status Updated"))
            .catch(err => alert(err.message))
    }

    return (
        <form onSubmit={ handleUpdateSubmit }>
            <div className="update_engine_form">
                <b>Update Engine</b>

                <label>Engine ID: <input id="update_manufactured_engine_id_input" name="manufactured_engine_id" type="text" onChange={handleUpdateChange} /></label>
                <label>VIN: <input id="update_associated_vehicle_vin_input" type="text" onChange={handleUpdateChange} /></label>
                <label>Layout: <input id="update_engine_layout_input" type="text" placeholder="Inline,Flat,V,4,6,8,10" checked={checked} onChange={handleCheckChange} /></label>

                <div className="list_of_engine_part_grid_container">
                    <label>Camshaft: <input id="update_camshaft_built_input" type="checkbox" checked={checked} onChange={handleCheckChange} /></label>
                    <label>Piston: <input id="update_piston_built_input" type="checkbox" checked={checked} onChange={handleCheckChange} /></label>
                    <label>Flywheel: <input id="update_flywheel_built_input" type="checkbox" checked={checked} onChange={handleCheckChange} /></label>
                    <label>Connecting Rod: <input id="update_connecting_rod_built_input" type="checkbox" checked={checked} onChange={handleCheckChange} /></label>
                    <label>Crankshaft: <input id="update_crankshaft_built_input" type="checkbox" checked={checked} onChange={handleCheckChange} /></label>
                    <label>Sump: <input id="update_sump_built_input" type="checkbox" checked={checked} onChange={handleCheckChange} /></label>
                    <label>Camshaft Drive Belt: <input id="update_camshaft_drive_belt_built_input" type="checkbox" checked={checked} onChange={handleCheckChange} /></label>
                </div>

                <label>Remark: <input id="update_engine_remark" type="text" maxLength={100} onChange={handleUpdateChange} /></label>
                <input type="submit" value="Update" />
            </div>
        </form>
    )
}

export default UpdateForm;
