import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({storedDepartmentId, handleSearch}) => { 
    const handleDeleteSubmit = (e) => {
        fetch(`http://localhost:9292/departments/engines/${e.target[0].value}`, {
            method: "DELETE",
            headers: {'Content-type': 'application/json'}
        })
        .then(alert("Removed engine sucessfully"))
        .then(e.target[0].value = "")
        .catch(err => alert(err.message))
    }

    return (
        <div className="crud_form_button_container">
            <Link to="/departments/create">
                <input className="create_form_button" type="button" value="Create Department"/>
            </Link>

            <Link to={`/departments/${storedDepartmentId}/engines/create`}>
                <input className="create_form_button" type="button" value="Create Engine"/>
            </Link>

            <input type="text" placeholder="Search By Engine ID" style={{"cursor": "text"}} maxLength={8} required={true} onChange={e => handleSearch(e)}/>

            <form onSubmit={handleDeleteSubmit}>
                <input type="text" placeholder="Delete By Engine ID" style={{"cursor": "text"}} maxLength={8} required={true} onChange={e => handleSearch(e)}/>
                <input type="submit" value="Delete"/>
            </form>
        </div>
    )
}

export default Navbar;