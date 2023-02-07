export default function ListingCard(props) {
    const {title, description, image, ingredients} = props.coffee

    console.log("ListingCard:",props.coffee)

    return(
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
            <details>
                <summary>Ingridents</summary>
                <p>{ingredients}</p>
            </details>
        </div>
    )
}