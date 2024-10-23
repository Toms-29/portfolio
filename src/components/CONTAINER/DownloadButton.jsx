

const DownloadButton = ( {buttonStyle, archivo} ) => {


    return (
        <>
            <button className={buttonStyle}>
                <a href={archivo} download>
                    Descargar CV
                </a>
            </button>
        </>
    )
}

export default DownloadButton