import React /*,{ useEffect,useState }*/ from 'react'
import {useFetchGifts} from '../hooks/useFetchGifts';
import GiftGridItem from './GiftGridItem';

const GiftGrid = ({category}) => {

    const { data:images,loading } = useFetchGifts(category);
    
    return (
        
        <>
            <h3 className=" animate__animated animate__fadeIn " >{category}</h3>
            { loading? 'Cargando' : '' }
            <div className='img-gal'>
            {images.map(img=>{
            return <GiftGridItem 
                key={img.id} 
                {...img}
            />})}
            </div>   
            
        </>
    )
}

export default GiftGrid;