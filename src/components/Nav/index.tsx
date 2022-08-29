import './style.css'

interface Props{
    currentPage:string
}

export default function Nav({currentPage}:Props){

    const currentClassName = (name:string)=>
        currentPage===name ? 'nav_link nav_link-current':'nav_link'
    

    return(
        <nav className='nav'>
            <a className={currentClassName('projets')} href="">Projets</a>
            <a className={currentClassName('contact')} href="">Contact</a>
            <a className={currentClassName('apropos')} href="">A propos</a>
        </nav>
    )
}