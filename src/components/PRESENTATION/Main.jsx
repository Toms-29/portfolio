import DownloadButton from '../CONTAINER/DownloadButton'
import IconsList from '../CONTAINER/IconsList'


function Main() {

    return (
        <>
            <main className='w-full flex items-center justify-center'>
                <section className='w-11/12 flex flex-col items-center gap-5 md:w-2/4 shadow-xl rounded-2xl px-20 pb-10'>
                    {/* Sobre mi */}
                    <article className='text-center tracking-wider md:max-w-2xl'>
                        <h1 className=' text-3xl font-semibold'>¡Hola soy
                            <span className='text-teal-600 text-3xl font-semibold'> Tomás</span>!
                        </h1>
                        <p>
                            y desarrollo hace mas de dos años con <span className='text-yellow-400'> JavaScript </span>
                            y <span className='text-sky-500'> React </span>, aplicando buenas practicas.
                            Igualmente, continuo mejorando mis habilidades como dev, manteniendo me actualizado sobre las tecnologias y
                            utilizando herramientas que hagan mas dinamico el trabajo con las mismas.
                        </p>
                        <br />
                        <p>
                            Ya que el mundo IT crece de manera rapida y constante, uno debe mantenerce informado para no quedarce en el camino,
                            en mi caso me matengo actualizado con newslwtters como <span className='text-rose-600'> Daily.dev </span>
                            y comunidades de devs como <span className='text-emerald-300'> FrontendCafe </span> .
                        </p>
                        <br />
                        <p>
                            Estoy entusiasmado por enfrentar desafíos profesionalmente y desarrollar nuevos proyectos.
                            Si estás interesado, no dudes en contactarme, sería un placer contribuir al crecimiento de tu equipo,
                            aportar mis habilidades y seguir creciendo en un entorno colaborativo.
                            Estoy convencido de que <span className='text-blue-600'> juntos </span>  podemos
                            crear soluciones innovadoras y marcar la diferencia en cada proyecto.
                        </p>
                    </article>

                    {/* Curriculum */}
                    <article className='flex flex-col justify-center items-center '>
                        <img className='w-52' src="../../../public/assets/images/cartel_curriculum.png" alt="Cartel de Curriculum" />
                        <br />
                        <DownloadButton
                            buttonStyle='py-3 px-5 rounded-3xl font-extrabold text-blue-800 border-4 border-blue-800 hover:text-white hover:bg-blue-600'
                            category='files' >
                        </DownloadButton>
                    </article>

                    {/* Tecnologias */}
                    <article className='flex flex-col items-center gap-4'>
                        <img className='w-52' src="../../../public/assets/images/cartel_tecnologias.png" alt="Cartel de Tecnologias" />
                        <IconsList
                            category='technology'
                            boxStyle='flex flex-wrap gap-2 justify-center max-w-xs md:max-w-lg'
                            iconStyle='w-20 drop-shadow-white' >
                        </IconsList>
                    </article>

                </section>
            </main>

        </>
    )
}

export default Main