import React, {useState} from 'react';
import AddCategory from './components/AddCategory'
import GiftGrid from './components/giftGrid'

import './index.css';

const GiftExpertApp = () =>{
    //const categories = ['Hunter x Hunter','DBZ', 'Lamb Of God']
    const [categories, setCategories] = useState([''])

    // const handleAdd = () =>{
    //     setCategories([...categories, 'Samurai X'])
    // }

    return(
        <>
        <h2>Gift Expert App</h2>
        <AddCategory setCategories ={setCategories}  />
        <hr/>
        {/* <button onClick={ handleAdd } id="txt-addCat">Agregar</button> */}
        <ol>
            {
            categories.map(cat=>(
                <GiftGrid 
                    key={cat} 
                    category={cat}
                />
            ))
            }
        </ol>
        </>
    )
}

export default GiftExpertApp;