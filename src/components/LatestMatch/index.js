import './index.css'

const LatestMatch = props => {
  const {latestMatchDetailsItems} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetailsItems

  return (
    <div>
      <h1>print the latest match details</h1>
    </div>
  )
}

export default LatestMatch
