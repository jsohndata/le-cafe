export default function ListingCard(props) {
    const {id, title, description, image, ingredients} = props.data

    console.log( {ingredients} )

    return(
        <article key={id} >
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <details>
                <summary>Ingridents</summary>
                <ul>
                {ingredients.map( (element) => {
                    return <li>{element}</li>
                })}
                </ul>
            </details>
        </article>
    )
}