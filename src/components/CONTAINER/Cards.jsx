import { useEffect, useState } from "react"


const Cards = ({ cardStyle, textBox, imgBox, srcImg, altText, cardTitle, cardDescripcion }) => {

    const [card, setCard] = useState(null)

    const cradCargada = () => {
        return (
            <figure className={cardStyle}>
                <div className={imgBox}>
                    <img src={srcImg} alt={altText} />
                </div>
                <div className={textBox}>
                    <h3>{cardTitle}</h3>
                    <p>{cardDescripcion}</p>
                </div>
            </figure >
        )
    }

    const cardVacia = () => {
        return (
            <div className='w-full h-full min-h-52 bg-slate-200 flex justify-center items-center rounded-lg'>
                Proyecto en desarrollo...
            </div>
        )
    }

    useEffect(() => {
        if (srcImg && cardTitle && cardDescripcion) {
            setCard(cradCargada())
        } else {
            setCard(cardVacia())
        }

    }, [srcImg, cardTitle, cardDescripcion])


    return (
        <>
            {card}
        </>
    )
}

export default Cards