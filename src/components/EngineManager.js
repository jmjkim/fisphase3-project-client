const EngineManager = ({ engines }) => {
    const handleCreateSubmit = ( e ) => {
        e.preventDefault()

        const formValues = {
            engine_layout: e.target[0].value,
            remark: e.target[1].value
        }

        fetch("http://localhost:9292/engine_department", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formValues)})
            .then(r => r.json())
            .then(alert("New engine created"))
            .catch(err => alert(err.message))
    }

    const handleUpdateSubmit = ( e ) => {
        e.preventDefault()

        // const formValues = {
            
        // }
    }

    return (
        <div className="engine_manager_form_container">
            <form onSubmit={handleCreateSubmit}>
                <div className="create_engine_form">
                    <b>Create New Engine</b>
                    <label for="create_engine_layout_input">Layout: <input id="create_engine_layout_input" type="text" placeholder="Layout(Inline, Flat, V)"></input></label>
                    <label for="create_engine_remark">Remark: <input id="create_engine_remark" type="text" maxLength={100}></input></label>
                    <input type="submit"></input>
                </div>
            </form>

            <form onSubmit={handleUpdateSubmit}>
                <div className="update_engine_form">
                    <b>Update Engine</b>
                    <label for="update_engine_layout_input">Layout: <input id="update_engine_layout_input" type="text" placeholder="Layout(Inline, Flat, V)"></input></label>
                    <label for="update_engine_remark">Remark: <input id="update_engine_remark" type="text" maxLength={100}></input></label>
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    )
}

export default EngineManager;

