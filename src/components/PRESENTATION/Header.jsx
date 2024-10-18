import Link from "../CONTAINER/Links"

function Header() {

    return (
        <>
            <header className="w-screen flex h-16 bg-zinc-900 justify-center items-center">
                <nav className="w-11/12 sm:w-2/4">
                    <Link
                        link='https://github.com/Toms-29'
                        imgSrc='../../../public/assets/images/github.png'
                        boxStyle='w-12'
                        imgStyle='w-12 drop-shadow-colored'
                        arialLabel='Link a GitHub'>
                    </Link>
                </nav>

            </header>
        </>
    )
}

export default Header