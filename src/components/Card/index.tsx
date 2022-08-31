import './style.scss'
import {filtersStore}  from '../../stores/filters'
import { useStore } from '@nanostores/react';


interface Project{
    title:string
    cover_url?:string
    short_text?:string
    url?:string
    classification?:string
}

interface Props{
    project:Project
}

function translateTag(tag:string){
    const translations :{[key:string]:string}= {
        game:'jeux',
        tool:'outils',
    }
    return translations[tag]??tag
}

export default function Card({project}:Props){
    const {title, cover_url, short_text, url, classification}=project
    const filters = useStore(filtersStore)
    if(!filters.includes(translateTag(classification??'')))return null
    return(
        <article data-type={classification}>
            <a href={`/projets/${title}`} className="link">
                <h2 className="title">{title}</h2>
                <div className="imgContainer">
                    <img src={cover_url} alt="" width="200" height="158" loading='lazy'/>
                    <img className="filtered" src={cover_url} alt="" width="200" height="200"loading='lazy' />
                </div>
                <p className="description">{short_text}</p>
            </a>
        </article>
    )
}