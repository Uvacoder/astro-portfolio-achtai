import type { Game, Games } from "./gamesType";
import { getImage } from "@astrojs/image";

let projets: Game[] | undefined;

async function localReplaceImgs(game: Game) {
  const src = "/assets/imgs/" + game.cover_url!;
  const img = await getImage({ src, width: 315, height: 250 });
  if (img.src) game.cover_url = img.src;
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
}

export default async function getProjets(markdownProjets:Game[]) {
  if (projets) return projets;
  const itchGames = await getItchGames();
  markdownProjets.forEach(localReplaceImgs);
  itchGames.forEach(remoteReplaceImgs);
  projets = [...itchGames,...markdownProjets] as Game[];
  projets = projets.sort((a, b) => {
    const date1 = new Date(a.created_at ?? 0);
    const date2 = new Date(b.created_at ?? 0);
    return date2.getTime() - date1.getTime();
  });

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
