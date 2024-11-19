

const NavBar = ( props ) => {


    return (
        <>
            <nav className={props.styles}>
                {props.children}
            </nav>
        </>
    )
}

export default NavBar