import Link from '../CONTAINER/Links'


function Footer() {

    return (
        <>
            <footer className='w-full bg-gray-900 flex justify-center items-center'>
                <section className='w-11/12 sm:w-3/4 flex flex-col gap-3 my-5'>
                    <article className='flex items-center justify-between'>
                        <h3 className='text-white'>Contacto: </h3>
                        <section className='flex flex-row items-center gap-4'>
                            <Link
                                link='https://wa.me/541150955469'
                                imgSrc='../../../public/assets/images/whatsapp.png'
                                boxStyle='w-12'
                                imgStyle='w-12 hover:drop-shadow-green'
                                arialLabel='Link a WhatsApp'>
                            </Link>
                            <Link
                                link='https://mail.google.com/mail/?view=cm&fs=1&to=gamezmatiastomas@gmail.com'
                                imgSrc='../../../public/assets/images/gmail.png'
                                boxStyle='w-12'
                                imgStyle='w-12 hover:drop-shadow-pink'
                                arialLabel='Link a Gmail'>
                            </Link>
                            <Link
                                link='https://www.linkedin.com/in/tomasgamez/'
                                imgSrc='../../../public/assets/images/linkedin.png'
                                boxStyle='w-12'
                                imgStyle='w-12 hover:drop-shadow-sky'
                                arialLabel='Link a LinkedIn'>
                            </Link>
                        </section>
                    </article>


                    <article>
                        <h3 className='text-white'>Iconos:</h3>
                        <ul className='text-sm text-sky-500'>
                            <li>
                                <a className='hover:text-white' target="_blank" href="https://www.flaticon.es/">Flaticon</a>
                            </li>
                            <li>
                                <a className='hover:text-white' target="_blank" href="https://icons8.com">Icons8</a>
                            </li>
                        </ul>
                    </article>
                </section>




            </footer>

        </>
    )
}

export default Footer