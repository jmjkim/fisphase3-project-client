import React, { useState } from "react";
import { Link } from "react-router-dom";

const DepartmentForm = ({storedDepartmentId}) => {
    const [formData, setFormData] = useState({
        name: "",
        department_of_engine_type: "",
        contact: ""
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
        .then(() => {
            alert("New Department created")
            window.location.reload()
        })
        .catch(() => alert("Department already exists!"))
    }

    return (
        <form className="form_head_container" onSubmit={handleCreateSubmit}>
            <b>Create New Department</b>
            <br/>

            <div className="form_head_input1_container">
                <label>Name <input name="name" type="text" onChange={handleChange} maxLength={20} required={true}/></label>
                <label>Department of Engine Type <input name="department_of_engine_type" type="text" placeholder="ex: sedan, SUV" onChange={handleChange} maxLength={10} required={true}/></label>
                <label>Contact <input name="contact" type="text" onChange={handleChange} maxLength={50}/></label>
                <span style={{"opacity": "50%"}}>Contact Format: John Doe 123-456-7890 abc@email.com</span>
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