

const Links = ( {link, imgSrc, imgAlt} ) => {

    return (
        <>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
            >
                <img src={imgSrc} alt={imgAlt} />
            </a>
        </>
    )
}

export default Links