import { trpc } from '../../lib/trcp'
import { getAllGamesRoute, getViewGameRoute } from '../../lib/routes'
import { Link } from 'react-router-dom'
import css from './index.module.scss'


export default function MainPage() {
  const { data } = trpc.getGames.useQuery()
  
  if (!data) return <div>Loading...</div>
  
  return <div>
    <h1 className={css.title}>Games</h1>
    {data.games.map((game) => (
        <h2 className={css.title}>
            <Link className={css.link} to={getViewGameRoute({ gameNick: game.nick })} key={game.nick}>
        {game.name}
      </Link>
        </h2>
    ))}
  </div>;
}