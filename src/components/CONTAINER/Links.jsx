

const Link = ({ props }) => {

    return (
        <>
            <div className={props.boxStyle}>
                <a
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={props.arialLabel}
                >
                    {props.imgSrc && props.imgStyle ? <img src={props.imgSrc} className={props.imgStyle} /> : <p className={props.textStyle} >{props.praphText}</p>}

                </a>
            </div>
        </>
    )
}

export default Link