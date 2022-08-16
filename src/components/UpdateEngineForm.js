import React, {useState} from "react";
import { Link } from "react-router-dom";

const UpdateEngineForm = ({storedDepartmentId}) => {
    const storedEngineObjKeys = sessionStorage.getItem("storedEngineObjKeys").split(",")
    const storedEngineObjValues = sessionStorage.getItem("storedEngineObjValues").split(",")

    const modifiedStoredEngineValues = storedEngineObjValues.map(value => {
        if (value === "true") return true
        else if (value === "false") return false
        else return value
    })
    
    const arrOfStoredEngineObj = storedEngineObjKeys.reduce((accumulator, element, index) => {
        return {...accumulator, [element]: modifiedStoredEngineValues[index]}
    }, {})

    const [updateFormData, setUpdateEngineFormData] = useState(arrOfStoredEngineObj)

    const handleChange = (e) => {     
        setUpdateEngineFormData({
            ...updateFormData,
            [e.target.name]: e.target.value
        })

        if (e.target.type === "checkbox")        
            setUpdateEngineFormData({
                ...updateFormData,
                [e.target.name]: e.target.checked
            })
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault()

        fetch(`http://localhost:9292/departments/engines/${updateFormData.manufactured_engine_id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updateFormData),
            })
            .then(r => r.json())
            .then(() => alert("Update successful"))
            .catch(err => alert(err.message))
    }

    return (
        <form className="form_head_container" onSubmit={handleUpdateSubmit}>
            <b style={{"marginBottom": "5%"}}>Update Engine Status</b>

            <div className="form_head_input1_container">
                <label>Engine ID </label><input type="text" name="manufactured_engine_id" value={updateFormData.manufactured_engine_id} readOnly/>
                <label>VIN </label><input type="text" name="associated_vehicle_vin" value={updateFormData.associated_vehicle_vin} onChange={(e) => handleChange(e)} required={true}/>
                <label>Layout </label><input type="text" name="engine_layout" value={updateFormData.engine_layout} onChange={(e) => handleChange(e)} maxLength={10} required={true}/>
                <label>Remark </label><input type="text" name="remark" value={updateFormData.remark} onChange={(e) => handleChange(e)} maxLength={100}/>
            </div>

            <div className="form_head_input2_container">
                <label>Camshaft </label><input type="checkbox" name="camshaft_built" checked={updateFormData.camshaft_built} onChange={(e) => handleChange(e)}/>
                <label>Piston </label><input type="checkbox" name="piston_built" checked={updateFormData.piston_built} onChange={(e) => handleChange(e)}/>
                <label>Flywheel </label><input type="checkbox" name="flywheel_built" checked={updateFormData.flywheel_built} onChange={(e) => handleChange(e)}/>
                <label>Connecting Rod </label><input type="checkbox" name="connecting_rod_built" checked={updateFormData.connecting_rod_built} onChange={(e) => handleChange(e)}/>
                <label>Crankshaft </label><input type="checkbox" name="crankshaft_built" checked={updateFormData.crankshaft_built} onChange={(e) => handleChange(e)}/>
                <label>Sump </label><input type="checkbox" name="sump_built" checked={updateFormData.sump_built} onChange={(e) => handleChange(e)}/>
                <label>Camshaft Drive Belt </label><input type="checkbox" name="camshaft_drive_belt_built" checked={updateFormData.camshaft_drive_belt_built} onChange={(e) => handleChange(e)}/>
            </div>

            <div className="form_head_button_container">
                <input type="submit" value="Update"/>
                <Link to={`/departments/${storedDepartmentId}/engines`}>
                    <input type="button" value="Back to Dashboard"/>
                </Link>
            </div>
        </form>
    )
}

export default UpdateEngineForm;