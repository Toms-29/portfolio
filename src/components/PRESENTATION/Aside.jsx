import Cards from '../CONTAINER/Cards'
import Carrusel from '../CONTAINER/Carrusel'
import { useSelector } from 'react-redux'

function Aside() {

    const lightTheme = useSelector((state) => (state.theme.lightTheme))

    const asideStyles = {
        darkmode: 'bg-gray-800'
    }

    const parrafoStyles = {
        darkmode: 'bg-neutral-900 shadow-neutral-700 text-white'
    }

    const articleCarruselStyles = {
        darkmode: 'bg-zinc-900 shadow-neutral-700 text-white'
    }


    return (
        <>
            <aside className={`${lightTheme ? 'bg-sky-600' : asideStyles.darkmode} w-full py-8 xl:h-screen flex items-center justify-center xl:justify-end `}>
                <section className={`${lightTheme ? 'bg-slate-50' : articleCarruselStyles.darkmode} w-11/12 max-w-6xl xl:h-3/4 py-6 rounded-xl xl:rounded-r-none xl:rounded-l-3xl sm:w-4/5 flex flex-col xl:flex-row gap-10 justify-center items-center`}>
                    <article className='bg- flex flex-col items-center px-3 justify-center gap-6 xl:gap-12'>
                        <h2 className='text-4xl'>Proyectos:</h2>
                        <p className={`${lightTheme ? 'bg-slate-100' : parrafoStyles.darkmode} max-w-md max-h-max rounded-md shadow-md px-4 py-2`}>
                            Los proyectos! Son de las primeras cosas que se mira en los programadores.
                            Importantes! ya que demuetran la forma en la que trabajamos con las herramientas que utilizamos.
                            Por ello y mas razones, en esta seccion, se encontraran los proyectos que ire desarrollando junto a una brebe
                            descripcion de ellos, si estas interesado podras visitarlos haciendo click sobre ellos.
                        </p>
                    </article>

                    <Carrusel>

                        <Cards
                            altText='Proyecto'
                            cardStyle='w-full h-full min-w-64 min-h-52 bg-slate-200 flex flex-col items-center rounded-md'
                            imgBox="w-full h-3/4 min-h-36 flex justify-center items-center"
                            textBox='w-11/12 px-2 pt-2 pb-4 border-gray-600 border-t-2'>
                        </Cards>

                        <Cards
                            altText='Proyecto'
                            cardStyle='w-full h-full min-w-64 min-h-52 bg-slate-200 flex flex-col items-center rounded-md'
                            imgBox="w-full h-3/4 min-h-36 flex justify-center items-center"
                            textBox='w-11/12 px-2 pt-2 pb-4 border-gray-600 border-t-2'>
                        </Cards>

                        <Cards
                            altText='Proyecto'
                            cardStyle='w-full h-full min-w-64 min-h-52 bg-slate-200 flex flex-col items-center rounded-md'
                            imgBox="w-full h-3/4 min-h-36 flex justify-center items-center"
                            textBox='w-11/12 px-2 pt-2 pb-4 border-gray-600 border-t-2'>
                        </Cards>

                        <Cards
                            altText='Proyecto'
                            cardStyle='w-full h-full min-w-64 min-h-52 bg-slate-200 flex flex-col items-center rounded-md'
                            imgBox="w-full h-3/4 min-h-36 flex justify-center items-center"
                            textBox='w-11/12 px-2 pt-2 pb-4 border-gray-600 border-t-2'>
                        </Cards>

                        <Cards
                            altText='Proyecto'
                            cardStyle='w-full h-full min-w-64 min-h-52 bg-slate-200 flex flex-col items-center rounded-md'
                            imgBox="w-full h-3/4 min-h-36 flex justify-center items-center"
                            textBox='w-11/12 px-2 pt-2 pb-4 border-gray-600 border-t-2'>
                        </Cards>

                    </Carrusel>

                </section>


            </aside>

        </>
    )
}

export default Aside