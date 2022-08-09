import React from "react";
import { useState } from "react";

const CreateForm = () => {
    const [ formData, setFormData ] = useState({
        engine_layout: "",
        remark: ""
    })

    const handleCreateChange = ( e ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleCreateSubmit = ( e ) => {
        e.preventDefault()

        fetch("http://localhost:9292/engine_department", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( formData )})
            .then(r => r.json())
            .then(() => alert( "New engine created" ))
            .catch(err => alert( err.message ))
    }

    return (
        <form onSubmit={ handleCreateSubmit }>
            <div className="create_engine_form">
                <b>Create New Engine</b>
                <br></br>

                <label>Layout: <br></br>
                <input id="create_engine_layout_input" name="engine_layout" type="text" placeholder="Inline,Flat,V,4,6,8,10" onChange={handleCreateChange} required="true" /></label>
                <label>Remark: <br></br>
                <input id="create_engine_remark_input" name="remark" type="text" maxLength={ 100 } onChange={handleCreateChange} /></label>
                <br></br>
                
                <input type="submit" value="Create" />
            </div>
        </form>
    )
}

export default CreateForm;