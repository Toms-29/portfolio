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
            <header className={`${lightTheme ? 'bg-sky-600' : headerStyles.darkmode} w-full flex h-28 justify-center items-center border-2 border-b-gray-700 border-r-0 border-t-0 border-l-0`}>
                <NavBar
                    styles="w-11/12 sm:w-3/4 flex justify-start md:justify-end gap-4 ">

                    <Menu>
                        <Link
                            praphText='GitHub'
                            link='https://github.com/Toms-29'>
                        </Link>
                        <Link
                            praphText='LinkedIn'
                            link='https://github.com/Toms-29'>
                        </Link>
                        <Link
                            praphText='Gmail'
                            link='https://github.com/Toms-29'>
                        </Link>
                    </Menu>

                    <DownloadButton
                        buttonStyle='w-32 h-12 bg-teal-500 rounded-lg border-2 border-black hidden md:inline-block'
                        archivo={assets.files.curriculum.src}>
                    </DownloadButton>

                    <Link
                        link='https://github.com/Toms-29'
                        imgSrc={assets.technology.github.src}
                        boxStyle='w-12 hidden md:inline-block'
                        imgStyle='w-12 hover:drop-shadow-white'
                        arialLabel='Link a GitHub'>
                    </Link>

                    <ThemeButton
                        buttonStyle='hidden md:inline-block'>
                    </ThemeButton>
                </NavBar>

            </header>
        </>
    )
}

export default Header