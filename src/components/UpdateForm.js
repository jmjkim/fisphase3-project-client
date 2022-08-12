import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const UpdateForm = () => {
    const navigateTo = useNavigate()
    
    const storedEngineObjKeys = sessionStorage.getItem("storedEngineObjKeys").split(",")
    const storedEngineObjValues = sessionStorage.getItem("storedEngineObjValues").split(",")

    const modifiedStoredEngineValues = storedEngineObjValues.map(value => {
        if (value === "true") return true
        else if (value === "false") return false
        else return value
    })
    
    const storedEngineObj = storedEngineObjKeys.reduce((accumulator, element, index) => {
        return {...accumulator, [element]: modifiedStoredEngineValues[index]}
    }, {})

    const [ updateFormData, setUpdateFormData ] = useState(storedEngineObj)

    const handleEnginePartChange = (e) => {        
        setUpdateFormData({
            ...updateFormData,
            [ e.target.name ]: e.target.value
        })

         if (e.target.type === "checkbox") {
            setUpdateFormData({
                ...updateFormData,
                [ e.target.name ]: e.target.checked
            })
         }
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault()

        fetch(`http://localhost:9292/engine_department/${updateFormData.manufactured_engine_id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updateFormData),
            })
            .then( r => { 
                if (r.ok) { 
                    alert("Update successful")
                    return r.json()
                }

                else alert(r.status)
            })}

    return (
        <form className="update_engine_form_container" onSubmit={handleUpdateSubmit}>
            <div className="update_non_engine_part_form">
                <label>Engine ID </label><input type="text" name="manufactured_engine_id" value={updateFormData.manufactured_engine_id} onChange={(e) => handleEnginePartChange(e)}/>
                <label>VIN </label><input type="text" name="associated_vehicle_vin" value={updateFormData.associated_vehicle_vin} onChange={(e) => handleEnginePartChange(e)}/>
                <label>Layout </label><input type="text" name="engine_layout" value={updateFormData.engine_layout} onChange={(e) => handleEnginePartChange(e)}/>
                <label>Remark </label><input type="text" name="remark" value={updateFormData.remark} onChange={(e) => handleEnginePartChange(e)} maxLength="200"/>
            </div>

            <div className="update_engine_part_form">
                <label>Camshaft </label><input type="checkbox" name="camshaft_built" checked={updateFormData.camshaft_built} onChange={(e) => handleEnginePartChange(e)}/>
                <label>Piston </label><input type="checkbox" name="piston_built" checked={updateFormData.piston_built} onChange={(e) => handleEnginePartChange(e)}/>
                <label>Flywheel </label><input type="checkbox" name="flywheel_built" checked={updateFormData.flywheel_built} onChange={(e) => handleEnginePartChange(e)}/>
                <label>Connecting Rod </label><input type="checkbox" name="connecting_rod_built" checked={updateFormData.connecting_rod_built} onChange={(e) => handleEnginePartChange(e)}/>
                <label>Crankshaft </label><input type="checkbox" name="crankshaft_built" checked={updateFormData.crankshaft_built} onChange={(e) => handleEnginePartChange(e)}/>
                <label>Sump </label><input type="checkbox" name="sump_built" checked={updateFormData.sump_built} onChange={(e) => handleEnginePartChange(e)}/>
                <label>Camshaft Drive Belt </label><input type="checkbox" name="camshaft_drive_belt_built" checked={updateFormData.camshaft_drive_belt_built} onChange={(e) => handleEnginePartChange(e)}/>
            </div>

                <input className="update_engine_form_container_button" type="submit" value="Update"/>
                <input className="update_engine_form_container_button" type="button" value="Back to Dashboard" onClick={() => navigateTo("/engine_department")}/>
        </form>
    )
}

export default UpdateForm;