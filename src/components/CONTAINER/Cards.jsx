import { useEffect, useState } from "react"


const Cards = ( props ) => {

    const [card, setCard] = useState(null)

    const cradCargada = () => {
        return (
            <figure className={props.cardStyle}>
                <div className={props.imgBox}>
                    <img src={props.srcImg} alt={props.altText} />
                </div>
                <div className={props.textBox}>
                    <h3>{props.cardTitle}</h3>
                    <p>{props.cardDescripcion}</p>
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
        if (props.srcImg && props.cardTitle && props.cardDescripcion) {
            setCard(cradCargada())
        } else {
            setCard(cardVacia())
        }

    }, [props.srcImg, props.cardTitle, props.cardDescripcion])


    return (
        <>
            {card}
        </>
    )
}

export default Cards