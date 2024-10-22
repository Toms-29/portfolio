import Cards from '../CONTAINER/Cards'

function Aside() {
    const cards = [
        { id: 12, title: 'Titulo', descripcion: 'En desarrollo', img: '' },
        { id: 13, title: 'Titulo', descripcion: 'En desarrollo', img: '' },
        { id: 14, title: 'Titulo', descripcion: 'En desarrollo', img: '' },
        { id: 15, title: 'Titulo', descripcion: 'En desarrollo', img: '' }
    ]

    return (
        <>
            <aside className='w-full flex items-center justify-center'>
                <section className='w-11/12 sm:w-3/4 flex flex-col items-center gap-5'>
                    <img className='w-52' src="./assets/images/cartel_proyectos.png" alt="Cartel de Proyectos" />
                    <div className='flex flex-wrap items-center justify-center gap-5 md:max-w-4xl'>
                        <Cards cards={cards}
                            cardStyle="w-64 sm:w-96 p-2 border-2 border-b-neutral-700 border-r-neutral-500 rounded-br-xl shadow-xl"
                            descriptionStyle="border-t-2 border-t-neutral-700 bg-black text-white rounded-br-xl py-2 px-4" >
                        </Cards>
                    </div>
                </section>

            </aside>

        </>
    )
}

export default Aside