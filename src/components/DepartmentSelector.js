import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DepartmentSelector = ({setStoredDepartmentId, departments}) => {
    const navigateTo = useNavigate()
    const [departmentOf, setDepartmentOf] = useState("")

    const handleSelectDepartmentClick = (e) => {
        const departmentId = e.target.value
        const departmentOf = e.target.innerText

        setDepartmentOf(departmentOf)
        setStoredDepartmentId(departmentId)

        sessionStorage.setItem("sessionStoredDepartmentId", departmentId)
        navigateTo(`/departments/${departmentId}/engines`)
    }

    return (
        <div className="select_department_container">
            <b>Choose Department</b>

            <div>
                {departments.map(department => {
                    return(
                        <button key={department.id} onClick={(e) => handleSelectDepartmentClick(e)} value={department.id}>{department.department_of_engine_type.toUpperCase()}</button>
                        )})}

                    <div style={{"marginTop": "20px"}}>
                        <Link to="/departments">
                            <input type="button" value="Back to Main" onClick={() => setDepartmentOf("")}/>
                        </Link>
                    </div>
            </div>
            
            <div className="department_displayer">
                <h3>{departmentOf !== "" ? `List of ${departmentOf} Engines` : null}</h3>
            </div>
        </div>

        )
}

export default DepartmentSelector;
