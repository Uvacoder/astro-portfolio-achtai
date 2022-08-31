import type { Game, Games } from "./gamesType"
import { getImage } from '@astrojs/image';
import projetsJson from '../assets/datas.json'



let projets:Game[]|undefined

async function replaceImgs(game:Game){
	const src ='/assets/imgs/' + game.cover_url!
	const img = await getImage({src,width:315,height:250})
	if(img.src)
		game.cover_url=img.src
	console.log(game.cover_url)
}

export default async function getProjets() {
	if(projets)return projets
	const itchGames = await getItchGames()
	projetsJson.forEach(replaceImgs);
	projets = [...itchGames,...projetsJson]as Game[]
	projets=projets.sort((a,b)=>{
		const date1 = new Date(a.created_at??0)
		console.log(a.title,date1,a.created_at)
		const date2 = new Date(b.created_at??0)
		return date2.getTime() - date1.getTime()
	})
	return projets
}

async function getItchGames(){
	const response = await fetch(`https://itch.io/api/1/${import.meta.env.ITCHIOKEY}/my-games`)
	const data = (await response.json()) as Games
	const games = data.games.filter((el: any) => el.published)
	return games

}
