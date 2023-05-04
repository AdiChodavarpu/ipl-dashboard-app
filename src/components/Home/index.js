import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    TeamCards: [],
  }

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const ModifiedData = teams.map(eachitem => ({
      name: eachitem.name,
      id: eachitem.id,
      teamImageUrl: eachitem.team_image_url,
    }))

    this.setState({TeamCards: ModifiedData})
  }

  render() {
    const {TeamCards} = this.state
    return (
      <div className="Home-bg-container">
        <div className="Home-logo-container">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="Ipl-logo-heading">IPL Dashboard</h1>
        </div>
        <ul className="teams-card-container">
          {TeamCards.map(eachitem => (
            <TeamCard key={eachitem.id} Teamcard={eachitem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
