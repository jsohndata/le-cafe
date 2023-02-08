export default function ListingCard(props) {
    const {title, description, image, ingredients} = props.data

    console.log( {ingredients} )

    return(
        <article>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <details>
                <summary>Ingridents</summary>
                <ul>
                {ingredients.map( (element,index) => {
                    return <li>{element}</li>
                })}
                </ul>
            </details>
        </article>
    )
}