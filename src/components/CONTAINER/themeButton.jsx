import { useState, useEffect } from "react"

const ThemeButton = () => {

    const [theme, setTheme] = useState('darkTheme')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'darkTheme' ? 'ligthTheme' : 'darkTheme'))
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (
        <>
            <button onClick={toggleTheme}>
                Theme
            </button>


        </>
    )
}

export default ThemeButton