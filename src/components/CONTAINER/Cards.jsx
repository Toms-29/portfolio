import { useEffect } from "react"


const Cards = ({ cards, cardStyle, descriptionStyle }) => {

    return (
        <>
            {cards.map(card => (
                <article className={cardStyle} key={card.id}>
                    <picture>
                        <img src={card.img} alt="Imagen de tal proyecto" className="h-44" />
                    </picture>
                    <div className={descriptionStyle}>
                        <h3>{card.title}</h3>
                        <p>{card.descripcion}</p>
                    </div>
                </article>
            ))}

        </>
    )
}

export default Cards