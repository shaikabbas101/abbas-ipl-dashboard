import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, teamImageUrl, name} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-card-item">
        <div className="card-details">
          <img className="team-logo" src={teamImageUrl} alt={`${name}Logo`} />
          <p className="team-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
