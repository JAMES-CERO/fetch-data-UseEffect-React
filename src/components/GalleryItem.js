import React, { useState } from "react";

const GalleryItem = (props) => {

    let [view, setView] = useState(false)

    return(
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}} >
            <p>One Gallery iT</p>
        </div>
    )
}

export default GalleryItem