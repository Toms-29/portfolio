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
            <aside className={`${lightTheme ? 'bg-sky-600' : asideStyles.darkmode} w-full h-screen flex items-center justify-end `}>
                <article className={`${lightTheme ? 'bg-slate-50' : articleCarruselStyles.darkmode} w-11/12 h-3/4 rounded-l-3xl  sm:w-4/5 flex flex-col gap-12 justify-center `}>
                    <section className='bg- flex items-center justify-center gap-12 md:max-w-full'>
                        <h2 className='text-4xl'>Proyectos:</h2>
                        <p className={`${lightTheme ? 'bg-slate-100' : parrafoStyles.darkmode} max-w-3xl max-h-max rounded-md shadow-md px-4 py-2`}>
                            Los proyectos! Son de las primeras cosas que se mira en los programadores.
                            Importantes! ya que demuetran la forma en la que trabajamos con las herramientas que utilizamos.
                            Por ello y mas razones, en esta seccion, se encontraran los proyectos que ire desarrollando junto a una brebe
                            descripcion de ellos, si estas interesado podras visitarlos haciendo click sobre ellos.
                        </p>
                    </section>

                    <Carrusel>

                        <Cards
                            cardTitle=''
                            cardDescripcion=''
                            srcImg=''
                            altText='Proyecto'
                            cardStyle='w-full bg-slate-200 flex flex-col justify-center items-center'
                            imgBox="w-full h-40 flex justify-center items-center"
                            textBox='w-11/12 px-2 pt-2 pb-4 border-gray-600 border-t-2'>
                        </Cards>

                        <Cards
                            cardTitle=''
                            cardDescripcion=''
                            srcImg=''
                            altText='Proyecto'
                            cardStyle='w-full bg-slate-200 flex flex-col justify-center items-center'
                            imgBox="w-full h-40 flex justify-center items-center"
                            textBox='w-11/12 px-2 pt-2 pb-4 border-gray-600 border-t-2'>
                        </Cards>

                        <Cards
                            cardTitle=''
                            cardDescripcion=''
                            srcImg=''
                            altText='Proyecto'
                            cardStyle='w-full bg-slate-200 flex flex-col justify-center items-center'
                            imgBox="w-full h-40 flex justify-center items-center"
                            textBox='w-11/12 px-2 pt-2 pb-4 border-gray-600 border-t-2'>
                        </Cards>

                        <Cards
                            cardTitle=''
                            cardDescripcion=''
                            srcImg=''
                            altText='Proyecto'
                            cardStyle='w-full bg-slate-200 flex flex-col justify-center items-center'
                            imgBox="w-full h-40 flex justify-center items-center"
                            textBox='w-11/12 px-2 pt-2 pb-4 border-gray-600 border-t-2'>
                        </Cards>

                        <Cards
                            cardTitle=''
                            cardDescripcion=''
                            srcImg=''
                            altText='Proyecto'
                            cardStyle='w-full bg-slate-200 flex flex-col justify-center items-center'
                            imgBox="w-full h-40 flex justify-center items-center"
                            textBox='w-11/12 px-2 pt-2 pb-4 border-gray-600 border-t-2'>
                        </Cards>

                    </Carrusel>

                </article>


            </aside>

        </>
    )
}

export default Aside