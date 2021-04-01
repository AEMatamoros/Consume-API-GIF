import React from 'react'


const GiftGridItem = ({img, id, title}) => {
    const { url } = img;
    return (
        <div className="card animate__animated animate__fadeIn " key={id}>
            <img  src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default GiftGridItem;