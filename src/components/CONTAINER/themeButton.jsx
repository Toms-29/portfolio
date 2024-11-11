import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from '../../STORE/themeSlice.js'
import assets from "../../assets.js"

const ThemeButton = ({ buttonStyle }) => {

    const dispatch = useDispatch()
    const lightTheme = useSelector((state) => state.theme.lightTheme)

    const buttonLight = assets.decorative.button_Light.src
    const buttonDark = assets.decorative.button_dark.src


    return (
        <>
            <button className={buttonStyle} onClick={() => dispatch(toggleTheme())}>
                <img src={lightTheme ? buttonLight : buttonDark} className="w-12" ></img>
            </button>
        </>
    )
}

export default ThemeButton