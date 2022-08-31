import { useEffect, useState } from "react"
import "./style.css"
export default function ThemeSwitch(){

    const [checked,setChecked]= useState(false)

    const handleChange = ()=>{
        setChecked(!checked)
        setTheme(checked?'light':'dark')
    }

    const setTheme = (theme:string)=>{
        document.firstElementChild?.setAttribute('theme',theme)
        localStorage.setItem('theme',theme)
    }

    useEffect(()=>{
        const theme = localStorage.getItem('theme')
        if(theme){
            setChecked(theme==='dark')
            setTheme(theme)
        }
        if (!theme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setChecked(true)
            setTheme('dark')
        }

        function onMediaChange(event:MediaQueryListEvent){
            const theme = event.matches ? "dark" : "light";
            setChecked(theme==='dark')
            setTheme(theme)
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',onMediaChange);
        
        return window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change',onMediaChange)
    })
    return(
        <label htmlFor="themeSwitch" className="themeSwitch">
            <input type="checkbox" name="themeSwitch" id="themeSwitch" className="themeSwitch_input" 
                checked={checked} onChange={()=>handleChange()} autoComplete="off"/>
            <span className="themeSwitch_display"></span>
        </label>
    )
}