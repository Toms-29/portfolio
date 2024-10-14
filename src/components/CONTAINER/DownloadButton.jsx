import assets from "../../assets"

const DownloadButton = () => {


    return (
        <>
            <button className='py-3 px-5 rounded-3xl font-bold text-sky-500 bg-white hover:text-white hover:bg-sky-500'>
                <a href='../../../public/assets/files/ejemplo_cv.txt' download>
                    Descargar CV
                </a>
            </button>
        </>
    )
}

export default DownloadButton