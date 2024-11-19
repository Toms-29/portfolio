

const DownloadButton = ({ props }) => {


    return (
        <>
            <button className={props.buttonStyle}>
                <a href={props.archivo} download>
                    Descargar CV
                </a>
            </button>
        </>
    )
}

export default DownloadButton