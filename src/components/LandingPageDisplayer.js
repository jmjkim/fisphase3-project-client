import { useState, useEffect } from "react";

const LandingPageDisplayer = () => {

    fetch("http://localhost:9292/test")
    .then(r => r.json())
    .then(data => console.log(data));


    return (
        <>
            <h1>Welcome to Engine Manufacturing Status Manager</h1>
            <img src="https://cdn.motor1.com/images/mgl/7AzVP/s1/amalgam-collection-bugatti-chiron-engine.jpg" alt="bugatti chiron engine" width={800} height={600}></img>

            <h3>List of engines</h3>
        </>
    )
};

export default LandingPageDisplayer;