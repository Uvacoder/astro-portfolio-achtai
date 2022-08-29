
import { useRef } from 'react'
import './index.css'

interface Props{
    title:string
    value:string[]
    setValue:()=>void
}

export default function Tag({title,value,setValue}:Props){

    return(
        <label htmlFor={title} className="filter">
            <input type="checkbox" name={title} id={title} checked={value.includes(title)} onChange={()=>setValue()} autoComplete="off" className='filter_input'/>
            <span className='filter_display'>{title}</span>
        </label>
    )
}