import { useState } from "react"
import ListingCard from "../ListingCard"

export default function Listing() {
    const [coffee, setCoffee] = useState()

    const getCoffee = temp => {
        fetch(`https://api.sampleapis.com/coffee/${temp}`)
            .then(res => res.json())
            .then(setCoffee)
            .catch(err => console.err(err))
    }

    console.log("Listing:",coffee)

    return(
        <>
            <header>
                <h1>Le Café de jsohnData</h1>
                <p>Select your coffee</p>
                
                <nav>
                    <button onClick={ ()=> getCoffee("hot") }>Hot</button>
                    <button onClick={ ()=> getCoffee("iced") }>Cold</button>
                </nav>
            </header>

            
            <section>
            {!coffee ? (
                <></>
            ) : (coffee.map( (element,key) => {
                return <ListingCard key={element.id} coffee={element} />})
            )}
            </section>
        </>
    )
}