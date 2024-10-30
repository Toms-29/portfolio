

const NavBar = ({ children, styles }) => {

    return (
        <>
            <nav className={styles}>
                {children}
            </nav>
        </>
    )
}

export default NavBar