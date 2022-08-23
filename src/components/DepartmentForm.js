import React, { useState } from "react";
import { Link } from "react-router-dom";

const DepartmentForm = ({storedDepartmentId, setDepartments, departments}) => {
    const [formData, setFormData] = useState({
        department_of_engine_type: "",
        name: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleCreateSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:9292/departments", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then((newDepartment) => {
            setDepartments([...departments, newDepartment])
            alert("New Department created")
        })
        .catch(() => alert("Department already exists!"))
    }

    return (
        <form className="form_head_container" onSubmit={handleCreateSubmit}>
            <b>Create New Department</b>
            <br/>

            <div className="form_head_input1_container">
                <label>Name <input name="name" type="text" onChange={handleChange} maxLength={20} required={true} autoComplete="off"/></label>
                <label>Department of Engine Type <input name="department_of_engine_type" type="text" placeholder="ex: sedan, SUV" onChange={handleChange} maxLength={10} required={true} autoComplete="off"/></label>
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

export default DepartmentForm;