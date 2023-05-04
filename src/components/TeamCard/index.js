import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {Teamcard} = props
  const {id, name, teamImageUrl} = Teamcard

  return (
    <Link to={`/team-matches/${id}`} className="team-card-link ">
      <li className="list-item">
        <img className="teamImage" src={teamImageUrl} alt={name} />
        <h1 className="team-name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
