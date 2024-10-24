


const Cards = ({ cardStyle, descriptionStyle, srcImg, cardTitle = 'Titulo', cardDescripcion = 'Este proyecto esta en desarrollo' }) => {

    return (
        <>
            <figure className={cardStyle}>
                <div className="h-44 flex justify-center items-center">
                    <img src={srcImg} alt="Proyecto en desarrollo" />
                </div>
                <figcaption className={descriptionStyle}>
                    <h3>{cardTitle}</h3>
                    <p>{cardDescripcion}</p>
                </figcaption>
            </figure>


        </>
    )
}

export default Cards