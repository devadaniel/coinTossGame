// Write your code here
import {Component} from 'react'
import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: headImage,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        tossResultImage: headImage,
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        tossResultImage: tailsImage,
      }))
    }
  }

  render() {
    const {headsCount, tailsCount, tossResultImage} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="app-card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="head-image" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="toss-count-container">
            <p className="total">Total:{totalCount}</p>
            <p className="heads">Heads:{headsCount}</p>
            <p className="tails">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
