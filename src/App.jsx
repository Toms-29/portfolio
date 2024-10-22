import './STYLES/App.css'
import Header from './components/PRESENTATION/Header'
import Main from './components/PRESENTATION/Main'
import Aside from './components/PRESENTATION/Aside'
import Footer from './components/PRESENTATION/Footer'
import { useState, useEffect } from "react"

function App() {

    const [theme, setTheme] = useState('darkTheme')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'darkTheme' ? 'ligthTheme' : 'darkTheme'))
    }

    useEffect(() => {
        const rootDiv = document.getElementById('root');
        if (rootDiv) {
            rootDiv.className = theme;
        }
    }, [theme]);

    return (
        <>
            <Header toggleTheme={toggleTheme}></Header>
            <Main></Main>
            <Aside></Aside>
            <Footer></Footer>
        </>
    )
}

export default App
