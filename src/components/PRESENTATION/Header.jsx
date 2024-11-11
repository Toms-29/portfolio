import Link from "../CONTAINER/Links"
import ThemeButton from "../CONTAINER/ThemeButton.jsx"
import DownloadButton from "../CONTAINER/DownloadButton"
import assets from '../../assets.js'
import NavBar from "../CONTAINER/NavBar.jsx"
import Menu from "../CONTAINER/Menu.jsx"
import { useSelector } from 'react-redux'

function Header() {

    const lightTheme = useSelector((state) => (state.theme.lightTheme))

    const headerStyles = {
        darkmode: 'bg-gray-900'
    }

    return (
        <>
            <header className={`${lightTheme ? 'bg-sky-600' : headerStyles.darkmode} w-full flex h-24 justify-center items-center border-2 border-b-gray-700 border-r-0 border-t-0 border-l-0`}>
                <NavBar
                    styles="w-11/12 sm:w-3/4 max-w-6xl flex justify-start md:justify-between gap-4 ">

                    <Menu>
                        <Link
                            boxStyle='border-b-2 border-slate-700'
                            textStyle='text-2xl tracking-wider hover:text-3xl transition-all '
                            praphText='GitHub'
                            link='https://github.com/Toms-29'>
                        </Link>
                        <Link
                            boxStyle='border-b-2 border-slate-700'
                            praphText='LinkedIn'
                            textStyle='text-2xl tracking-wider hover:text-3xl transition-all '
                            link='https://www.linkedin.com/in/tomasgamez/'>
                        </Link>
                        <Link
                            boxStyle='border-b-2 border-slate-700'
                            textStyle='text-2xl tracking-wider hover:text-3xl transition-all '
                            praphText='Gmail'
                            link='https://mail.google.com/mail/?view=cm&fs=1&to=gamezmatiastomas@gmail.com'>
                        </Link>

                        <DownloadButton
                            buttonStyle='w-32 h-12 text-black font-semibold bg-teal-400 hover:bg-black hover:text-teal-500 rounded-lg border-2 border-black self-center flex items-center justify-center mt-auto mb-20'
                            archivo={assets.files.curriculum.src}>
                        </DownloadButton>
                    </Menu>

                    <ThemeButton
                        buttonStyle='hidden md:inline-block'>
                    </ThemeButton>

                    <section className="hidden md:flex items-center justify-center text-white ">
                        <Link
                            boxStyle='border-r-2 hover:bg-black border-slate-600 px-4 py-2 transition-all'
                            praphText='GITHUB'
                            textStyle='text-2xl font-semibold'
                            link='https://github.com/Toms-29'>
                        </Link>
                        <Link
                            boxStyle='border-r-2 hover:bg-blue-600 border-slate-600 px-4 py-2 transition-all'
                            praphText='LINKEDIN'
                            textStyle='text-2xl font-semibold'
                            link='https://www.linkedin.com/in/tomasgamez/'>
                        </Link>
                        <Link
                            praphText='GMAIL'
                            textStyle='text-2xl hover:bg-red-600 font-semibold px-4 py-2 transition-all'
                            link='https://mail.google.com/mail/?view=cm&fs=1&to=gamezmatiastomas@gmail.com'>
                        </Link>
                    </section>


                    <DownloadButton
                        buttonStyle='w-32 h-12 bg-teal-400 hover:bg-black hover:text-teal-500 font-semibold rounded-lg border-2 border-black hidden md:inline-block transition-all'
                        archivo={assets.files.curriculum.src}>
                    </DownloadButton>

                </NavBar>

            </header>
        </>
    )
}

export default Header