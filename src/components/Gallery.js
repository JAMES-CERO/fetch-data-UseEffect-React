import React from "react";
import GalleryItem from "./GalleryItem";

const Gallery = (props) => {

    const myData = props.data.result.read()

    const display = myData.map((item, i) => {
        return (
            <GalleryItem item={item} key={i} />
        )
    })
    
    return(
        <div>
            {display }
        </div>
    )
}

export default Gallery