import "./style.css"
import Nav from "../Nav"
import ThemeSwitch from '../ThemeSwitch'

interface Props{
    currentPage:string
}

export default function Header({currentPage}:Props){
    return(
        <header className="header">
            <a href="/" className="header_link">
                <h1 className="header_title">Achtaitaipai</h1>
            </a>
            <Nav currentPage={currentPage}/>
            <ThemeSwitch/>
        </header>
    )
}