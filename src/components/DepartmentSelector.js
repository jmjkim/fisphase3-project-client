import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DepartmentSelector = ({setStoredDepartmentId}) => {
    const [departments, setDepartments] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/departments")
        .then(r => r.json())
        .then(setDepartments)
        .catch(err => alert(err.message))
    }, []);
    
    return (
        <div className="select_department">
            <b>Choose Department</b>

            <div>
                {departments.map(department => {
                    return(
                        <label onClick={(e) => {
                            setStoredDepartmentId(e.target.value)
                            sessionStorage.setItem("sessionStoredDepartmentId", e.target.value)
                            }}>{department.department_of_engine_type.toUpperCase()}

                        <Link to={`/departments/${department.id}/engines`}>
                            <input type="button" value={department.id} style={{"cursor": "pointer"}}/>
                        </Link>
                        </label>
                        )})}
                    <div>

                        <Link to="/departments">
                            <input type="button" value="Back to Main"/>
                        </Link>
                    </div>
            </div>
        </div>)
}

export default DepartmentSelector;
