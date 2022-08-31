import type { Game, Games } from "./gamesType";
import { getImage } from "@astrojs/image";
import projetsJson from "../assets/datas.json";

let projets: Game[] | undefined;

async function localReplaceImgs(game: Game) {
  const src = "/assets/imgs/" + game.cover_url!;
  const img = await getImage({ src, width: 315, height: 250 });
  if (img.src) game.cover_url = img.src;
  console.log(game.cover_url);
}

async function remoteReplaceImgs(game: Game) {
  //   cette image faisait tout planter ?! => 'https://img.itch.zone/aW1nLzUxODY2NTkucG5n/315x250%23c/evfy7%2F.png'
  const src = game.cover_url;
  if (src) {
    const img = await getImage({
      src,
      width: 315,
      height: 250,
    });
    if (img.src) game.cover_url = img.src;
  }
  console.log(game.cover_url);
}

export default async function getProjets() {
  if (projets) return projets;
  const itchGames = await getItchGames();
  projetsJson.forEach(localReplaceImgs);
  itchGames.forEach(remoteReplaceImgs);
  projets = [...itchGames, ...projetsJson] as Game[];

  return projets;
}

async function getItchGames() {
  const response = await fetch(
    `https://itch.io/api/1/${import.meta.env.ITCHIOKEY}/my-games`
  );
  const data = (await response.json()) as Games;
  const games = data.games.filter((el: any) => el.published);
  return games;
}
