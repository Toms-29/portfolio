

const NavBar = ({ children, props }) => {

    return (
        <>
            <nav className={props.styles}>
                {children}
            </nav>
        </>
    )
}

export default NavBar