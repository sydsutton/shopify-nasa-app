import React, {useState, useContext} from "react"
import {RiShoppingCartLine, RiShoppingCartFill} from "react-icons/ri"
import {Context} from "../Context"

const NavbarComponent = () => {

    const {likedPhotos} = useContext(Context)
    return (
        <div className="navbar d-flex flex-row justify-content-between bg-light sticky-top mb-3 shadow-sm">
            <div/>
            <h3 className="header">Nasa</h3>
            <div className="d-flex flex-row align-items-center justify-content-center">
                {likedPhotos.length !== 0 ? <RiShoppingCartFill size={25} className="icon filled-icon"/> : <RiShoppingCartLine size={25} className="icon empty-icon"/> }
                <h5 className={likedPhotos.length !== 0 ? "liked-num mb-0 ml-1" : "mb-0 ml-1"}>{likedPhotos.length}</h5>
            </div> 
        </div>
    )
}

export default NavbarComponent