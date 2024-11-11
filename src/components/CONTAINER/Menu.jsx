import assets from "../../assets"
import { useState } from "react"

const Menu = ({ children }) => {

    const [desplegar, setDesplegar] = useState(false)

    const toggleMenu = () => {
        setDesplegar(!desplegar)
    }


    return (
        <>
            <button onClick={toggleMenu} className='w-max h-max md:hidden'>
                <img className="w-12" src={assets.decorative.menu.src} alt="Menu desplegable" />
            </button>

            {desplegar && (
                <section className='bg-black text-white w-full h-screen fixed z-10 left-0 top-0'>
                    <article className="w-full flex justify-between items-center px-4 py-3">
                        <p className="text-3xl">Menu</p>
                        <button onClick={toggleMenu}>
                            <img className="w-8" src={assets.decorative.X.src} alt="Cerrar menu" />
                        </button>
                    </article>
                    <article className='w-full bg-neutral-900 h-full px-5 py-3'>
                        {children}
                    </article>
                </section>

            )}
        </>
    )
}

export default Menu