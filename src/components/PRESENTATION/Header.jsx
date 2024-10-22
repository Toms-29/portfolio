import Link from "../CONTAINER/Links"
import ThemeButton from "../CONTAINER/ThemeButton"

function Header({ toggleTheme, theme }) {

    return (
        <>
            <header className="w-full flex h-20 bg-teal-600 justify-center items-center border-4 border-b-gray-700 border-r-0 border-t-0 border-l-0">
                <nav className="w-11/12 sm:w-3/4 flex justify-end gap-4">
                    <ThemeButton toggleTheme={toggleTheme} theme={theme}></ThemeButton>

                    <Link
                        link='https://github.com/Toms-29'
                        imgSrc='./assets/images/github.png'
                        boxStyle='w-12'
                        imgStyle='w-12 hover:drop-shadow-white'
                        arialLabel='Link a GitHub'>
                    </Link>
                </nav>

            </header>
        </>
    )
}

export default Header