import Link from "../CONTAINER/Links"

function Header() {

    return (
        <>
            <header className="w-full flex h-20 bg-zinc-900 justify-center items-center border-4 border-b-teal-600 border-r-0 border-t-0 border-l-0">
                <nav className="w-11/12 sm:w-3/4 flex justify-end">
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