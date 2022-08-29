import type { Game, Games } from "./gamesType"

let games:Game[]|undefined

export default async function getGames() {
	if(games)return games
	const response = await fetch(`https://itch.io/api/1/${import.meta.env.ITCHIOKEY}/my-games`)
	const data = (await response.json()) as Games
	games = data.games.filter((el: any) => el.published)
	return games
}
