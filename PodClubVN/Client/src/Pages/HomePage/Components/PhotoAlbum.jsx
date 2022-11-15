import React from 'react'
import PhotoAlbum from "react-photo-album";
import photos from './Photos';

export default function PhotosAlbum() {
    return (
        <>
            <PhotoAlbum layout="masonry" photos={photos} />
        </>
    )
}
