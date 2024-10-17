import IconsList from "./IconsList"

const Links = () => {

    return (
        <>
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
            >
                <IconsList
                    category='network'
                    boxStyle='flex flex-wrap gap-2 justify-center'
                    iconStyle='w-10'>
                </IconsList>
            </a>
        </>
    )
}

export default Links