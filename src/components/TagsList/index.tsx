import { useStore } from "@nanostores/react";
import { filtersStore, filtersLabel } from "../../stores/filters";

export default function TagList() {

  const btnsStates= useStore(filtersStore)

  function handleClick(tag: string) {
    const state = btnsStates.find(el=>el.name===tag)?.active
    if(state){
        filtersStore.set(btnsStates.map(el=>({...el,active:el.name===tag?false:el.active})))
    }else{
        filtersStore.set(btnsStates.map(el=>({...el,active:el.name!==tag?true:false})))
    }
  }

  return (
    <ul className="tagList">
      {btnsStates.map((el, i) => (
        <li key={i}>
          <button
            className={"tagList_btn" + (el.active ?" tagList_btn-active":"")}
            onClick={() => handleClick(el.name)}
          >
            {el.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

// export default function TagsList(){

//     const filters = useStore(filtersStore)
//     const setValue = (tag:string)=>{
//         if(filters.includes(tag)){
//             filtersStore.set(filters.filter(el=>el!==tag))

//         }
//         else
//             filtersStore.set([...filters,tag])
//     }

//     return(
//     <ul className="tagList">
//             {filtersLabel.map((el,i)=>(
//                 <li key={i}>
//                     <Tag title={el} value={filters} setValue={()=>setValue(el)}/>
//                 </li>
//             ))}
//     </ul>
//     )
// }
