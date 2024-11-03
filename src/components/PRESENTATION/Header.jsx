import Link from "../CONTAINER/Links"
import ThemeButton from "../CONTAINER/ThemeButton"
import DownloadButton from "../CONTAINER/DownloadButton"
import assets from '../../assets.js'
import NavBar from "../CONTAINER/NavBar.jsx"
import { useSelector } from 'react-redux'

function Header() {

    const ligthTheme = useSelector((state) => (state.theme.ligthTheme))

    return (
        <>
            <header className="w-full flex h-28 bg-sky-600 justify-center items-center border-2 border-b-gray-700 border-r-0 border-t-0 border-l-0">
                <NavBar
                    styles="w-11/12 sm:w-3/4 flex justify-end gap-4 ">

                    <DownloadButton
                        buttonStyle='w-32 h-12 bg-teal-500 rounded-lg border-2 border-black'
                        archivo={assets.files.curriculum.src}>
                    </DownloadButton>

                    <Link
                        link='https://github.com/Toms-29'
                        imgSrc={assets.technology.github.src}
                        boxStyle='w-12'
                        imgStyle='w-12 hover:drop-shadow-white'
                        arialLabel='Link a GitHub'>
                    </Link>

                    <ThemeButton></ThemeButton>
                </NavBar>

            </header>
        </>
    )
}

export default Header