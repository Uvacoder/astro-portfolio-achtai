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
    
    function state(tag:string){
        return filters.find(el=>el.name===translateTag(classification??''))?.active   
    }

    if(state(classification??''))return null
    return(
        <article data-type={classification} className="projetPreview">
            <a href={`/projets/${title}`} className="projetPreview_link">
                <h2 className="projetPreview_title">{title}</h2>
                <div className="projetPreview_imgContainer">
                    <img className='projetPreview_img' src={cover_url} aria-hidden="true" width="200" height="158" />
                    <img className="projetPreview_img projetPreview_img-filtered" src={cover_url} aria-hidden="true" width="200" height="158" />
                </div>
                <p className="projetPreview_description">{short_text}</p>
            </a>
        </article>
    )
}