import { atom } from 'nanostores';
export const filtersLabel = ['jeux','outils','sites','blabla']
export const filtersStore = atom(filtersLabel.map(el=>({name:el,active:false})));