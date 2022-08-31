import { forwardRef, useEffect, useState } from 'react'
import './style.css'

interface Props{
    currentPage:string
}

export default function Nav({currentPage}:Props){

    const [location,setLocation]=useState('')

    useEffect(()=>{
        const onChange = ()=>{
            const href=window.location.href
            if(href.includes('apropos'))setLocation('apropos')
            else if(href.includes('contact'))setLocation('contact')
            else setLocation('projets')
        }
        onChange()
        window.addEventListener("navigate",onChange)
        // return window.removeEventListener("navigate",onChange)
    })
    

    return(
        <nav className='nav'>
            <a className={'nav_link'+(location==='projets' ? ' nav_link-current':'')} href="/">Projets</a>
            <a className={'nav_link'+(location==='contact' ? ' nav_link-current':'')} href="/contact">Contact</a>
        </nav>
    )
}