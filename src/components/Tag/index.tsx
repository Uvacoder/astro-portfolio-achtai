interface Props{
    title:string
    value:string[]
    setValue:()=>void
}

export default function Tag({title,value,setValue}:Props){

    return(
        <label htmlFor={title} className="filterTag">
            <input type="checkbox" name={title} id={title} checked={value.includes(title)} onChange={()=>setValue()} autoComplete="off" className='filterTag_input'/>
            <span className='filterTag_display'>{title}</span>
        </label>
    )
}