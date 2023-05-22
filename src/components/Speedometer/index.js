// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  brake = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="text">Speed is {count}mph</h1>
        <p className="para">Min limit is 0mph, Max limit is 200mph</p>
        <div className="btn-container">
          <button className="accelerate" onClick={this.accelerate}>
            Accelerate
          </button>
          <button className="brake" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
