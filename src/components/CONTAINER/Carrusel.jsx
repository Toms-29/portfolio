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
            <section className='carrusel-container'>
                <button className="next-button" onClick={imgAnterior}> {'<'} </button>
                <article className='carrusel'>
                    {Children.map(children, (child, index) => {
                        const imgPrincipal = index === indexCarrusel

                        return (
                            <div className={`carrusel-item ${imgPrincipal ? 'principal' : ''}`}>
                                {child}
                            </div>

                        )
                    })}
                </article>
                <button className="prev-button" onClick={imgSiguiente}> {'>'} </button>
            </section>
        </>
    )


};


export default Carrusel