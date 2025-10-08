import { useParams } from 'react-router-dom'
import { type ViewGameRouteParams } from '../../lib/routes'
import { trpc } from '../../lib/trcp.tsx'

export default function ViewGamePage() {
    const { gameNick } = useParams<ViewGameRouteParams>()
    const { data } = trpc.getGame.useQuery({ gameNick: gameNick! })
    if (!data || !data.game) return <div>Loading...</div>
    return <div>
        <h1>{data.game.name}</h1>
        <p>{data.game.description}</p>
        <p>{data.game.type}</p>
    </div>
}