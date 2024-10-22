import { useEffect } from "react"

const ThemeButton = ({ toggleTheme, theme }) => {
    const ligth_mode = '../../../public/assets/images/ligth_mode.png'
    const dark_mode = '../../../public/assets/images/dark_mode.png'
    let img_mode

    useEffect(() => {
      theme === 'ligthTheme' ? img_mode = ligth_mode : img_mode = dark_mode
      return () => {
      }
    }, [theme])
    


    return (
        <>
            <button onClick={toggleTheme}>
                <img src={img_mode} alt='Boton para cambiar el tema ' />
            </button>


        </>
    )
}

export default ThemeButton