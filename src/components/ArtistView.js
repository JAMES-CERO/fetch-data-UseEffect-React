import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const ArtistView = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const [artistData, setArtistData] = useState([])
    

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            // console.log(resData)
            setArtistData(resData.results)
        }
        fetchData()
    }, [id])
    
    const justAlbums = artistData.filter( entry => entry.collectionType === 'Album')

    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key={i}>
                <Link to={`/album/${album.collectionId}`} >
                <p>{album.collectionName}</p>
                </Link>
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
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading ...</h2>}
            <h2> The id passed was: {id }</h2>
            <p>Artist' data</p>
            {renderAlbums}
        </div>
    )
}

export default ArtistView
