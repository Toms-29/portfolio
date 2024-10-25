import Cards from '../CONTAINER/Cards'
import Carrusel from '../CONTAINER/Carrusel'

function Aside() {

    return (
        <>
            <aside className='w-full h-screen flex items-center justify-end bg-sky-600'>
                <article className='w-11/12 h-3/4 rounded-l-3xl bg-slate-50 sm:w-4/5 flex flex-col gap-12 justify-center'>
                    <section className='flex items-center justify-center gap-12 md:max-w-full'>
                        <h2 className='text-4xl'>Proyectos:</h2>
                        <p className='max-w-3xl max-h-max rounded-md bg-slate-100 shadow-lg px-4 py-2'>
                            Los proyectos! Son de las primeras cosas que se mira en los programadores.
                            Importantes! ya que demuetran la forma en la que trabajamos con las herramientas que utilizamos.
                            Por ello y mas razones, en esta seccion, se encontraran los proyectos que ire desarrollando junto a una brebe
                            descripcion de ellos, si estas interesado podras visitarlos haciendo click sobre ellos.
                        </p>
                    </section>

                    <Carrusel>
                        <Cards
                            cardStyle='w-lg h-md bg-slate-200 '
                            descriptionStyle=''>
                        </Cards>

                        <Cards
                            cardStyle='w-lg h-md bg-slate-200 '
                            descriptionStyle=''>
                        </Cards>

                        <Cards
                            cardStyle='w-lg h-md bg-slate-200 '
                            descriptionStyle=''>
                        </Cards>

                        <Cards
                            cardStyle='w-lg h-md bg-slate-200 '
                            descriptionStyle=''>
                        </Cards>

                        <Cards
                            cardStyle='w-lg h-md bg-slate-200 '
                            descriptionStyle=''>
                        </Cards>

                    </Carrusel>

                </article>


            </aside>

        </>
    )
}

export default Aside