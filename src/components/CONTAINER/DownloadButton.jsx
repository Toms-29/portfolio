import assets from "../../assets"

const DownloadButton = ( {buttonStyle} ) => {


    return (
        <>
            <button className={buttonStyle}>
                <a href='../../../public/assets/files/ejemplo_cv.txt' download>
                    Descargar CV
                </a>
            </button>
        </>
    )
}

export default DownloadButton