import { useStore } from "@nanostores/preact";
import { filtersStore } from "../../stores/filters";

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
    <ul className="tagList" role="list">
      {btnsStates.map((el, i) => (
        <li key={i}>
          <button
            className={"tagList_btn" + (el.active ?" tagList_btn-active":"")}
            role="switch"
            aria-checked={el.active}
            onClick={() => handleClick(el.name)}
            title={'filters '+el.name}
          >
            {el.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
