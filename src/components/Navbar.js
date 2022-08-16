import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({storedDepartmentId}) => { 
    const engineTables = document.querySelectorAll("#eid")

    const handleSearchSubmit = (e) => {
        e.preventDefault()
    
        engineTables.forEach(engineTable => {
            if (engineTable.innerText.toLowerCase() === e.target[0].value.toLowerCase()) {
                e.target[0].value = ""

                engineTable.scrollIntoView()
                engineTable.parentNode.setAttribute("style", "background-color: rgb(255, 100, 100)")

                window.addEventListener("click", () => engineTable.parentNode.removeAttribute("style"))
            }})
    }

    const handleDeleteSubmit = (e) => {
        fetch(`http://localhost:9292/departments/engines/${e.target[0].value}`, {
            method: "DELETE",
            headers: {'Content-type': 'application/json'}
        })
        .then(alert("Removed engine sucessfully"))
        .then(() => {
            e.target[0].value = ""
            window.location.reload()
        })
        .catch(err => alert(err.message))
    }

    return (
        <nav>
            {/* <h2 style={{"marginBottom": -30}}>List of {storedDepartment.toUpperCase()} Engines</h2> */}

            <div className="crud_form_button_container">
                <Link to="/departments/create">
                    <input className="create_form_button" type="button" value="Create Department"/>
                </Link>

                <Link to={`/departments/${storedDepartmentId}/engines/create`}>
                    <input className="create_form_button" type="button" value="Create Engine"/>
                </Link>

                <form onSubmit={handleSearchSubmit}>
                    <input type="text" placeholder="Search By Engine ID" style={{"cursor": "text"}} maxLength={8} required={true}/>
                    <input type="submit" value="Search"/>
                </form>

                <form onSubmit={handleDeleteSubmit}>
                    <input type="text" placeholder="Delete By Engine ID" style={{"cursor": "text"}} maxLength={8} required={true}/>
                    <input type="submit" value="Delete"/>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;