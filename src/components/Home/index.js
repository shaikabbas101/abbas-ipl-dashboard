import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

const urlApi = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {teamCardsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const response = await fetch(`${urlApi}`)
    const fetchedData = await response.json()
    const updatedData = fetchedData.teams.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      teamImageUrl: eachData.team_image_url,
    }))
    console.log(updatedData)
    this.setState({teamCardsData: updatedData, isLoading: false})
  }

  renderTeamCards = () => {
    const {teamCardsData} = this.state

    return (
      <ul className="team-list-container">
        {teamCardsData.map(team => (
          <TeamCard teamData={team} key={team.id} />
        ))}
      </ul>
    )
  }

  renderIsLoading = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderHome = () => (
    <div>
      <div className="ipl-logo-and-title">
        <img
          className="ipl-logo"
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl-logo "
        />
        <h1 className="heading">IPL Dashboard</h1>
      </div>
      {this.renderTeamCards()}
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-container">
        {isLoading ? this.renderIsLoading() : this.renderHome()}
      </div>
    )
  }
}

export default Home
