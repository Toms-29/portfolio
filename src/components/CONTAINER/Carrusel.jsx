import { Children, useState } from "react"


const Carrusel = ({ children }) => {

    const [indexCarrusel, setIndexCarrusel] = useState(0)

    const imgSiguiente = () => {
        setIndexCarrusel((prevIndex) =>
            prevIndex === children.length - 1 ? prevIndex = 0 : prevIndex + 1)
    }

    const imgAnterior = () => {
        setIndexCarrusel((prevIndex) =>
            prevIndex === 0 ? children.length - 1 : prevIndex - 1)
    }

    return (
        <>
            <section className="carrusel-container">
                <button className="next-button" onClick={imgAnterior}> Anterior </button>
                <article className='carrusel'>
                    {Children.map(children , (child, index) => {
                        const imgPrincipal = index === indexCarrusel
                        const imgAnterior = indexCarrusel === 0 ? index === (children.length - 1) : index === (indexCarrusel - 1)
                        const imgSiguiente = indexCarrusel === children.length - 1 ? (index === 0) : index === (indexCarrusel + 1)

                        return (
                            <div className={`carrusel-item ${imgPrincipal ? 'principal' : ''} ${imgSiguiente ? 'siguiente' : ''} ${imgAnterior ? 'anterior' : ''}`}>
                                {child}
                            </div>

                        )
                    })}
                </article>
                <button className="prev-button" onClick={imgSiguiente}> Siguiente </button>
            </section>
        </>
    )


};


export default Carrusel