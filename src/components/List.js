import { useState, useEffect } from "react"
import ListingCard from "./ListCard.js"

export default function List() {
    const [data, setData] = useState()
    const [attribute, setAttribute] = useState('iced')

    useEffect( ()=>{        
        fetch(`https://api.sampleapis.com/coffee/${attribute}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.err)
        },[attribute])
    
    console.log( {data} )

    return(
        <>
            <header>
                <h1>Le Café de jsohnData</h1>
                                
                <nav>
                    <button onClick={ ()=> setAttribute("hot") }>Hot</button>
                    <button onClick={ ()=> setAttribute("iced") }>Cold</button>
                </nav>
            </header>

            <section>
            {!data 
                ? (<></>) 
                : (data.map( (element) => (
                     <ListingCard 
                        data={element} />))
            )}
            </section>
        </>
    )
}