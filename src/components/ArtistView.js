import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArtistView = () => {
    const {id} = useParams()
    const [artistData, setArtistData] = useState([])

    return(
        <div>
            <h2> The id passed was: {id }</h2>
            <p>Artist' data</p>
        </div>
    )
}

export default ArtistView