import Link from "../CONTAINER/Link"
import { useSelector } from 'react-redux'
import assets from '../../assets'


function Main() {

    const theme = useSelector((state) => (state.theme.theme))

    const mainStyles = {
        lightmode: 'w-full flex items-center justify-center',
        darkmode: 'w-full flex items-center justify-center text-white bg-black'
    }

    const articleTecnoligisStyles = {
        darkmode: 'bg-zinc-900 shadow-neutral-700'
    }

    const parrafoStyles = {
        darkmode: 'bg-neutral-900 shadow-neutral-700'
    }

    return (
        <>
            <main className={theme === 'light' ? mainStyles.lightmode : mainStyles.darkmode}>
                <section className='md:w-3/4 max-w-6xl flex flex-col items-center gap-5 '>
                    {/* Sobre mi */}
                    <h1 className=' text-3xl font-semibold p-4'>¡Hola soy Tomás!</h1>
                    <article className='flex flex-col justify-center tracking-wider w-11/12 md:h-screen'>
                        <p className={`${theme === 'light' ? 'bg-slate-50' : parrafoStyles.darkmode} max-w-lg shadow-lg rounded-md px-5 py-2`}>
                            Y desarrollo hace mas de dos años con <span className="text-yellow-500 font-semibold"> JavaScript </span> y <span className="text-sky-600 font-semibold"> React</span>, conciente de la utilizacion de buenas practicas.
                            Igualmente, continuo mejorando mis habilidades como dev, manteniendome <span className="text-emerald-400 font-semibold"> actualizado </span> sobre las
                            tecnologias y utilizando herramientas que hagan mas dinamico el trabajo con las mismas.
                        </p>
                        <br />
                        <p className={`${theme === 'light' ? 'bg-slate-50' : parrafoStyles.darkmode} max-w-lg self-end shadow-lg rounded-md px-5 py-2`}>
                            Mi camino por el mundo del desarrollo web comenzo y, por el momento, continua de forma autodidacta y
                            de la mano de empresas que brindan becas para la capacitacion profecional, un ejemplo de ello es
                            el programa <span className="text-indigo-700 font-semibold"> Digitalers </span>  de la empresa <span className="text-indigo-700 font-semibold"> Telecom </span> con el cual me estoy especializando en el area de <span className="text-teal-500 font-semibold"> Fornt-End</span>.
                        </p>
                        <br />
                        <p className={`${theme === 'light' ? 'bg-slate-50' : parrafoStyles.darkmode} max-w-lg shadow-lg rounded-md px-5 py-2`}>
                            Ya que el mundo IT crece de manera rapida y constante, uno debe mantenerce <span className="text-pink-600 font-semibold"> informado </span> para no quedarce
                            en el camino, en mi caso me matengo actualizado con herramientas como <span className="text-red-600 font-semibold"> Daily.dev </span> y comunidades de devs
                            como <span className="text-amber-500 font-semibold"> FrontendCafe</span> .
                        </p>
                        <br />
                        <p className={`${theme === 'light' ? 'bg-slate-50' : parrafoStyles.darkmode} max-w-lg self-end shadow-lg rounded-md px-5 py-2`}>
                            Estoy entusiasmado por enfrentar desafíos profesionalmente y desarrollar nuevos proyectos.
                            Si estás interesado, <span className="text-blue-600 font-semibold"> no dudes en contactarme</span> , sería un placer contribuir al crecimiento de tu equipo,
                            aportar mis habilidades y seguir <span className="text-teal-500 font-semibold"> creciendo </span> en un entorno colaborativo.
                            Estoy convencido de que juntos podemos
                            crear soluciones innovadoras y <span className="text-rose-600 font-semibold"> marcar la diferencia </span> en cada proyecto.
                        </p>
                    </article>


                    {/* Tecnologias */}
                    <article className={`${theme === 'light' ? 'bg-yellow-200' : articleTecnoligisStyles.darkmode} flex flex-col justify-evenly px-2 py-4 md:w-11/12 xl:h-screen `}>
                        <h2 className='text-center text-3xl xl:text-6xl'>Tecnologias:</h2>
                        <section className='flex flex-col xl:flex-row justify-around items-center'>
                            <div className='flex flex-col gap-5'>
                                <p className={`${theme === 'light' ? 'xl:bg-slate-50' : parrafoStyles.darkmode} max-w-md max-h-max rounded-md xl:shadow-lg px-4 py-2`}>
                                    Estas son las tecnologias que utilizo para desarrollar mis proyectos.
                                    Para una vista mas tecnica podes revisar mi GitHub, en donde podras ver
                                    en detalle la utilizacion de las mismas. Si te interesa mi perfil, cualquier
                                    tecnologia o proyecto nuevo que haga llegara alli primero, asi que no te olvides
                                    de visitarlo😉!
                                </p>
                                <img src={assets.decorative.flecha_zaul.src} className='w-48 self-end hidden xl:inline-block' />
                            </div>

                            <div className={`${theme === 'light' ? 'xl:bg-slate-50' : parrafoStyles.darkmode} flex items-center gap-3 justify-center flex-wrap max-w-md rounded-md shadow-lg py-5`}>
                                <img className='w-16 md:w-24 drop-shadow-yellow' src={assets.technology.javascript.src} alt="Logo de JavaScript" />
                                <img className='w-16 md:w-24 drop-shadow-sky' src={assets.technology.react.src} alt="Logo de React" />
                                <img className='w-16 md:w-24 drop-shadow-orange' src={assets.technology.html.src} alt="Logo de HTML" />
                                <img className='w-16 md:w-24 drop-shadow-sky' src={assets.technology.css.src} alt="Logo de CSS" />
                                <img className='w-16 md:w-24 drop-shadow-pink' src={assets.technology.sass.src} alt="Logo de SASS" />
                                <img className='w-16 md:w-24 drop-shadow-orange' src={assets.technology.git.src} alt="Logo de Git" />
                                <img className='w-16 md:w-24 drop-shadow-white' src={assets.technology.github.src} alt="Logo de GitHub" />
                                <img className='w-16 md:w-24 drop-shadow-green' src={assets.technology.tailwind.src} alt="Logo de Tailwind" />
                                <img className='w-16 md:w-24 drop-shadow-pink' src={assets.technology.bootstrap.src} alt="Logo de Bootstrap" />
                            </div>
                        </section>

                    </article>

                </section>
                <Link
                    link='https://wa.me/541150955469'
                    imgSrc='./assets/images/whatsapp.png'
                    boxStyle='w-12 fixed z-10 right-5 bottom-5'
                    imgStyle='w-16 hover:drop-shadow-green'
                    arialLabel='Link a WhatsApp'>
                </Link>
            </main>

        </>
    )
}

export default Main