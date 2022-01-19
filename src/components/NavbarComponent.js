import React, {useState, useContext} from "react"
import {FcLikePlaceholder, FcLike} from "react-icons/fc"
import {Context} from "../Context"

const NavbarComponent = () => {

    const {likedPhotos} = useContext(Context)
    return (
        <div className="navbar d-flex flex-row justify-content-between sticky-top mb-3 shadow-sm">
            <div/>
            <h2 className="header">NASA</h2>
            <div className="d-flex flex-row align-items-center justify-content-center">
                {likedPhotos.length !== 0 ? <FcLike size={45} className="icon filled-icon"/> : <FcLikePlaceholder size={45} className="icon empty-icon"/> }
                <h5 className={likedPhotos.length !== 0 ? "liked-num total" : "total text-dark"}>{likedPhotos.length}</h5>
            </div> 
        </div>
    )
}

export default NavbarComponent