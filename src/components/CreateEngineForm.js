import React, {useState} from "react";
import { Link } from "react-router-dom";

const CreateEngineForm = ({storedDepartmentId}) => {
    const [formData, setFormData] = useState({
        engine_type: "",
        engine_layout: "",
        remark: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    const handleCreateSubmit = (e) => {
        e.preventDefault()

        fetch(`http://localhost:9292/departments/${storedDepartmentId}/engines`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)})
            .then(r => r.json())
            .then(() => alert("New engine created"))
            .catch(err => alert(err.message))
    }

    return (
        <form className="form_head_container" onSubmit={handleCreateSubmit}>
            <b>Create New Engine</b>
            <br/>

            <div className="form_head_input1_container">
                <label>Layout <input name="engine_layout" type="text" placeholder="ex: Inline10" onChange={handleChange} maxLength={10} required={true} autoComplete="off"/></label>
                <label>Remark <input name="remark" type="text" maxLength={100} onChange={handleChange} autoComplete="off"/></label>
            </div>

            <div className="form_head_button_container">
                <input type="submit" value="Create"/>
                <Link to={`/departments/${storedDepartmentId}/engines`} className="link">
                    <input type="button" value="Back to Dashboard"/>
                </Link>
            </div>
        </form>
    )
}

export default CreateEngineForm;