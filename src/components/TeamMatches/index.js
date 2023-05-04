import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchData: {},
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getLatestMatchDetails = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const modifiedData = await response.json()

    const UpdatedData = {
      teamBannerUrl: modifiedData.team_banner_url,
      latestMatchDetails: this.getLatestMatchDetails(
        modifiedData.latest_match_details,
      ),
      recentMatches: modifiedData.recent_matches,
    }

    this.setState({teamMatchData: UpdatedData})
  }

  render() {
    const {teamMatchData} = this.state

    const {teamBannerUrl, latestMatchDetails} = teamMatchData

    return (
      <div className="TeamMatches-bg-Container">
        <img className="teamBanner-Img" src={teamBannerUrl} alt="team banner" />

        <div className="latest-matches-container">
          <p className="latest-match-para">Latest Matches</p>
          <LatestMatch latestMatchDetailsItems={latestMatchDetails} />
        </div>
      </div>
    )
  }
}

export default TeamMatches
