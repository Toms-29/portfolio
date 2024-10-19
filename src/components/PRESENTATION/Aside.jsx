import Cards from '../CONTAINER/Cards'

function Aside() {
    const cards = [
        { id: 12, title: 'Titulo', descripcion: 'hola', img: '' },
        { id: 13, title: 'Titulo', descripcion: 'como estas', img: '' },
        { id: 14, title: 'Titulo', descripcion: 'bueno', img: '' },
        { id: 15, title: 'Titulo', descripcion: 'chau', img: '' }
    ]

    return (
        <>
            <aside className='w-full flex items-center justify-center'>
                <section className='w-11/12 sm:w-3/4 flex flex-col items-center gap-5'>
                    <h2>Proyectos:</h2>
                    <div className='flex flex-wrap items-center justify-center gap-5 md:max-w-4xl'>
                        <Cards cards={cards}
                            cardStyle="w-64 sm:w-96 p-2 border-2 border-b-neutral-700 border-r-neutral-500 rounded-br-xl"
                            descriptionStyle="border-t-2 border-t-neutral-700" >
                        </Cards>
                    </div>
                </section>

            </aside>

        </>
    )
}

export default Aside