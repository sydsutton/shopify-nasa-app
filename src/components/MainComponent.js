import React, {useContext, useState} from "react"
import Navbar from "./NavbarComponent"
import {Context} from "../Context"
import Photos from "./PhotoComponent"

const MainComponent = () => {
    const {errorMessage, loading} = useContext(Context)
    
    return (
        <div className="text-center mx-auto">
            <Navbar />
            {errorMessage ? <h4>{errorMessage}</h4> : loading ? <p>Loading...</p> : <Photos />}
        </div>
    )
}

export default MainComponent