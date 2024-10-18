

const Link = ({ link, imgSrc, arialLabel, imgStyle, boxStyle } ) => {

    return (
        <>
            <div className={boxStyle}>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={arialLabel}
                >
                    <img src={imgSrc} className={imgStyle} />
                </a>
            </div>
        </>
    )
}

export default Link