import './STYLES/App.css'
import Header from './components/PRESENTATION/Header'
import Main from './components/PRESENTATION/Main'
import Aside from './components/PRESENTATION/Aside'
import Footer from './components/PRESENTATION/Footer'
import { useSelector } from "react-redux"


function App() {

    const lightTheme = useSelector((state) => state.theme.lightTheme)

    return (
        <>
            <Header></Header>
            <Main></Main>
            <Aside></Aside>
            <Footer></Footer>
        </>
    )
}

export default App
