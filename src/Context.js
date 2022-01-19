import React, {useContext, useEffect, useState} from "react"

const Context = React.createContext()

const ContextProvider = (props) => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const [photosData, setPhotosData] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [likedPhotos, setLikedPhotos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let isMounted = true
        setLoading(true)
        async function getData(){
            await fetch(`https://api.nasa.gov/EPIC/api/natural/date/2021-01-01?api_key=${API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    setLoading(false)
                    setPhotosData(data)
                })
                .catch(() => {
                    setLoading(false)
                    setErrorMessage("Sorry, we coudln't complete your request. Please try again later.")
                })
        }

        getData()

        return isMounted = false
    },[])
    // console.log(photosData)
    console.log(likedPhotos)

    const likePhoto = (photo) => {
        setLikedPhotos([...likedPhotos, photo])
    }

    const unlikePhoto = (photo) => {
        setLikedPhotos([...likedPhotos.includes(photo) ? likedPhotos.filter(photos => photos !== photo) : null])
    }

    return (
        <Context.Provider value={{photosData, errorMessage, API_KEY, likePhoto, unlikePhoto, likedPhotos, loading}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
