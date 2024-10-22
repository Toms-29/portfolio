

const DownloadButton = ( {buttonStyle} ) => {


    return (
        <>
            <button className={buttonStyle}>
                <a href='/assets/files/ejemplo_cv.txt' download>
                    Descargar CV
                </a>
            </button>
        </>
    )
}

export default DownloadButton