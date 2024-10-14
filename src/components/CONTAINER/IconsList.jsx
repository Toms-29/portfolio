import assets from '../../assets'


const IconsList = ({ category, iconStyle, boxStyle }) => {
    const images = assets[category]

    return (
        <>
            <article className={boxStyle}>
                {images.map((imag, index) => (
                    <img className={iconStyle} key={index} src={imag.src} alt={imag.alt} />
                ))}
            </article>

        </>
    )
}


export default IconsList