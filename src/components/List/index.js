import { useState, useEffect } from "react"
import ListingCard from "../ListCard"

export default function List() {
    const [data, setData] = useState()
    const [attribute, setAttribute] = useState('hot')

    useEffect( ()=>{        
            fetch(`https://api.sampleapis.com/coffee/${attribute}`)
                .then(res => res.json())
                .then(setData)
                .catch(err => console.err(err))

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
            : (data.map( (element) => {
                return <ListingCard key={element.id} data={element} />})
            )}
            </section>
        </>
    )
}