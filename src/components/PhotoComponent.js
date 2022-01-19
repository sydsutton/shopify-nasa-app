import React, {useState, useContext} from "react"
import {FcLikePlaceholder, FcLike} from "react-icons/fc"

import {Context} from "../Context"

const PhotoComponent = () => {

    const {photosData, API_KEY, likePhoto, unlikePhoto, likedPhotos} = useContext(Context)

    return (
        <div className="photo-container">
        {photosData.map((photo, index) => {
            return (
                <div key={index} className="m-2 hover"> 
                    {}
                    <div className="mx-auto btn-container">
                        {likedPhotos.includes(photo) ? 
                            <FcLike size={30} className="unlike-btn" 
                            onClick={() => unlikePhoto(photo)} />
                        :
                            <FcLikePlaceholder size={30} className="like-btn" 
                            onClick={() => likePhoto(photo)} />
                        }
                    </div>
                    <img className="photo" src={`https://api.nasa.gov/EPIC/archive/natural/${photo.date.slice(0,4)}/${photo.date.slice(5,7)}/${photo.date.slice(8,10)}/png/${photo.image}.png?api_key=${API_KEY}`}/>
                </div>
            )
        })}
    </div>
    )
}

export default PhotoComponent