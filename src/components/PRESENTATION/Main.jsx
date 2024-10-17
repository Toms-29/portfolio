import DownloadButton from '../CONTAINER/DownloadButton'
import IconsList from '../CONTAINER/IconsList'


function Main() {

    return (
        <>
            <main className='w-screen flex items-center justify-center'>
                <section className='w-11/12 flex flex-col items-center gap-5 sm:w-3/4'>
                    {/* Sobre mi */}
                    <article className='text-center tracking-wider md:max-w-2xl'>
                        <h2>Sobre mi:</h2>
                        <p>
                            ¡Hola! Soy Tomás y estoy muy motivado por empezar a desarrollar código como Front-End junto a vos.
                            He adquirido conocimientos sólidos en JavaScript y React. Estoy entusiasmado por renovar y
                            desarrollar nuevos proyectos.
                        </p>
                        <br />
                        <p>
                            Estoy listo para enfrentar desafíos profesionalmente.
                            Si estás interesado, no dudes en contactarme, sería un placer contribuir al crecimiento de tu equipo,
                            aportar mis habilidades y seguir creciendo en un entorno colaborativo.
                            Estoy convencido de que juntos podemos crear soluciones innovadoras y marcar la diferencia en cada proyecto.
                        </p>
                    </article>

                    {/* Curriculum */}
                    <article className='flex flex-col justify-center items-center max-w-'>
                        <h2>Curriculum:</h2>
                        <DownloadButton
                            category='files' >
                        </DownloadButton>
                    </article>

                    {/* Tecnologias */}
                    <article className='flex flex-col items-center gap-4'>
                        <h2>Tecnologias:</h2>
                        <IconsList
                            category='technology'
                            boxStyle='flex flex-wrap gap-2 justify-center max-w-xs md:max-w-lg'
                            iconStyle='w-20 drop-shadow-colored' >
                        </IconsList>
                    </article>

                </section>
            </main>

        </>
    )
}

export default Main