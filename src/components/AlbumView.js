import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AlbumView = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const [albumData, setAlbumData] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            // console.log(resData)
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    const justSongs = albumData.filter( entry => entry.wrapperType === 'track')

    const renderSongs = justSongs.map((song, i) => {
        return (
            <div key={i}>
                <p>{song.trackName}</p>
            </div>
        )
    })

    const navButtoms = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)} >Back</button>
                \
                <button onClick={() => navigate('/')} >Home</button>
            </div>
        )
    }
    return(
        <div>
            {navButtoms()}

            <h2> the id passed was: {id}</h2>
            <p>Albums' Data</p>
            {renderSongs}

        </div>
    )
}

export default AlbumView