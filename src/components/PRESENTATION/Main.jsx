import DownloadButton from '../CONTAINER/DownloadButton'
// import IconsList from '../CONTAINER/IconsList'
import assets from '../../assets'


function Main() {

    return (
        <>
            <main className='w-full flex items-center justify-center'>
                <section className='w-11/12 md:w-3/4 flex flex-col items-center gap-5 '>
                    {/* Sobre mi */}
                    <h1 className=' text-3xl font-semibold p-4'>¡Hola soy Tomás!</h1>
                    <article className='flex flex-col justify-center tracking-wider w-11/12 h-screen'>
                        <p className='max-w-lg shadow-lg rounded-md bg-slate-50 px-5 py-2'>
                            Y desarrollo hace mas de dos años con JavaScript y React, conciente de la utilizacion de buenas practicas.
                            Igualmente, continuo mejorando mis habilidades como dev, manteniendome actualizado sobre las
                            tecnologias y utilizando herramientas que hagan mas dinamico el trabajo con las mismas.
                        </p>
                        <br />
                        <p className='max-w-lg self-end shadow-lg rounded-md bg-slate-50 px-5 py-2'>
                            Mi camino por el mundo del desarrollo web comenzo y, por el momento, continua de forma autodidacta y
                            de la mano de empresas que brindan becas para la capacitacion profecional, un ejemplo de ello es
                            el programa Digitalers de la empresa Telecom con el cual me estoy especializando en el area de Fornt-End.
                        </p>
                        <br />
                        <p className='max-w-lg shadow-lg rounded-md bg-slate-50 px-5 py-2'>
                            Ya que el mundo IT crece de manera rapida y constante, uno debe mantenerce informado para no quedarce
                            en el camino, en mi caso me matengo actualizado con herramientas como Daily.dev y comunidades de devs
                            como FrontendCafe .
                        </p>
                        <br />
                        <p className='max-w-lg self-end shadow-lg rounded-md bg-slate-50 px-5 py-2'>
                            Estoy entusiasmado por enfrentar desafíos profesionalmente y desarrollar nuevos proyectos.
                            Si estás interesado, no dudes en contactarme, sería un placer contribuir al crecimiento de tu equipo,
                            aportar mis habilidades y seguir creciendo en un entorno colaborativo.
                            Estoy convencido de que juntos podemos
                            crear soluciones innovadoras y marcar la diferencia en cada proyecto.
                        </p>
                    </article>

                    {/* Curriculum */}
                    <article className='flex flex-col justify-center items-center h-screen bg-orange-200'>
                        <img className='w-52' src="./assets/images/cartel_curriculum.png" alt="Cartel de Curriculum" />
                        <br />
                        <DownloadButton
                            buttonStyle='py-3 px-5 rounded-3xl font-extrabold text-blue-800 border-4 border-blue-800 hover:text-white hover:bg-blue-600'
                            archivo={assets.files.curriculum.src}>
                        </DownloadButton>
                    </article>

                    {/* Tecnologias */}
                    <article className='flex flex-col items-center gap-4 h-screen bg-red-300'>
                        <p>hola</p>
                        {/* <img className='w-52' src="./assets/images/cartel_tecnologias.png" alt="Cartel de Tecnologias" />
                        <IconsList
                            category='technology'
                            boxStyle='flex flex-wrap gap-2 justify-center max-w-xs md:max-w-lg'
                            iconStyle='w-20 drop-shadow-white' >
                        </IconsList> */}
                    </article>

                </section>
            </main>

        </>
    )
}

export default Main