


const Cards = ({ cards, cardStyle, descriptionStyle }) => {

    return (
        <>
            {cards.map(card => (
                <article className={cardStyle} key={card.id}>
                    <div className="h-44 flex justify-center items-center">
                        <img src={card.img} alt="Proyecto en desarrollo" />
                    </div>
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