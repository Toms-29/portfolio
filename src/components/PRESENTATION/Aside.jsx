import Cards from '../CONTAINER/Cards'

function Aside() {

    return (
        <>
            <aside className='w-full h-screen flex items-center justify-end bg-sky-600'>
                <article className='w-11/12 h-3/4 rounded-l-3xl bg-slate-50 sm:w-4/5 flex flex-col gap-5 '>
                    <h2 className='p-12 text-4xl'>Proyectos:</h2>

                    <section className='flex items-center justify-around md:max-w-full'>
                        <p className='max-w-md max-h-max rounded-md bg-slate-100 shadow-lg px-4 py-2'>
                            Los proyectos! Son de las primeras cosas que se mira en los programadores. 
                            Importantes! ya que demuetran la forma en la que trabajamos con las herramientas que utilizamos.
                            Por ello y mas razones, en esta seccion, se encontraran los proyectos que ire desarrollando junto a una brebe 
                            descripcion de ellos, si estas interesado podras visitarlos haciendo click sobre ellos.
                        </p>

                        <Cards
                            cardStyle="w-64 sm:w-96 p-2 border-2 border-b-neutral-700 border-r-neutral-500 rounded-br-xl bg-slate-200 shadow-xl"
                            descriptionStyle="border-t-2 border-t-neutral-700 bg-black text-white rounded-br-xl py-2 px-4" >
                        </Cards>
                    </section>
                </article>

            </aside>

        </>
    )
}

export default Aside