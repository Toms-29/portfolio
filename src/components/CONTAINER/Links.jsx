

const Link = ({ link, imgSrc, arialLabel, imgStyle, boxStyle, praphText, textStyle } ) => {

    return (
        <>
            <div className={boxStyle}>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={arialLabel}
                >
                    {imgSrc && imgStyle ? <img src={imgSrc} className={imgStyle} /> : <p className={textStyle} >{praphText}</p> }
                    
                </a>
            </div>
        </>
    )
}

export default Link