export default function ListingCard(props) {
    const {title, description, image, ingredients} = props.coffee

    console.log("ListingCard:",ingredients)

    return(
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
            <details>
                <summary>Ingridents</summary>
                <ul>{ingredients.map( (element,index) => {
                    return <li>{element}</li>
                } )}</ul>
            </details>
        </div>
    )
}