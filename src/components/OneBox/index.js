import {Component} from 'react'
import PrimeNavBar from '../PrimeNavBar'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class OneBox extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    mailsList: [],
  }

  componentDidMount() {
    this.getMailData()
  }

  getMailData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl = 'https://hiring.reachinbox.xyz/api/v1/onebox/list'
    try {
      const response = await fetch(apiUrl)
      if (response.ok) {
        const data = await response.json()
        this.setState({
          mailsList: data,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderMailList = mailsList => (
    <div className="all-inboxes">
      <div>
        <ul>
          <h1 className="failure-data">All boxes</h1>
          {mailsList.map(mail => (
            <li key={mail.id} className="mail">
              {mail.subject}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  getData = () => {
    const {apiStatus, mailsList} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderMailList(mailsList)
      case apiStatusConstants.inProgress:
        return <p>Loading...</p>
      case apiStatusConstants.failure:
        return <p className="failure-data">Failed to fetch data.</p>
      default:
        return null
    }
  }

  render() {
    return (
      <div className="one-box-container">
        <PrimeNavBar />

        <div className="body-section">
          <nav className="frame-nav-bar">
            <h1 className="title">Onebox</h1>
            <div>
              <select>
                <option>Tim&apos;s Workspace</option>
              </select>
            </div>
          </nav>
          <div className="content-section">{this.getData()}</div>
        </div>
      </div>
    )
  }
}

export default OneBox
