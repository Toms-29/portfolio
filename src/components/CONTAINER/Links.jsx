

const Links = ({ link, imgSrc, arialLabel }) => {

    return (
        <>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={arialLabel}
            >
                <img src={imgSrc} />
            </a>
        </>
    )
}

export default Links