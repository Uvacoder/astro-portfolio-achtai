import './index.css'
import { useStore } from '@nanostores/react';
import {filtersStore,filtersLabel} from '../../stores/filters'
import Tag from "../Tag";

export default function TagsList(){

    const filters = useStore(filtersStore)
    const setValue = (tag:string)=>{
        if(filters.includes(tag)){
            filtersStore.set(filters.filter(el=>el!==tag))

        }
        else
            filtersStore.set([...filters,tag])
    }

    return(
    <ul className="tags">
            {filtersLabel.map((el,i)=>(
                <li key={i}>
                    <Tag title={el} value={filters} setValue={()=>setValue(el)}/>
                </li>
            ))}
    </ul>
    )
}