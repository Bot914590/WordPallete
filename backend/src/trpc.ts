import { initTRPC } from '@trpc/server'
import _ from 'lodash'
import { z } from 'zod'

let typeArray: string[] = ['wheel', 'match', 'quiz'];
function getGameType(index: number, typeArray: string[]) {
  return typeArray[index % typeArray.length];
}

const games = _.times(100, (i) => ({
  nick: `cool-game-by-${i}`,
  name: `cool-game- ${i}`,
  description: `Description of game ${i}...`,
  type: `type-of-game-${getGameType(i, typeArray)}`,
  text: _.times(100, (j) => `<p>Discription paragrph ${j} of game ${i}...</p>`).join(''),
}))


const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getGames: trpc.procedure.query(() => {
    return { games: games.map((game) => _.pick(game, ['nick', 'name', 'description', 'type'])) }
  }),
  getGame: trpc.procedure.input(
    z.object({
      gameNick: z.string(),
    }),
  ).query(({input}) => {
    const game = games.find((game) => game.nick === input.gameNick)
    return { game: game || null }
  }),
})

export type TrpcRouter = typeof trpcRouter