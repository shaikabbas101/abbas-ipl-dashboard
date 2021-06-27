import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchData

  const matchStatusClassName = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="match-card-item">
      <img
        className="competing-team-logo"
        src={competingTeamLogo}
        alt={`team-${competingTeam}Logo`}
      />
      <h1 className="competing-team-name">{competingTeam}</h1>
      <p className="match-result">{result}</p>
      <p className={`${matchStatusClassName} match-status`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
