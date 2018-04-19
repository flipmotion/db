import React from 'react'
import './index.scss'

class PortfolioDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = { class: "PortfolioDescription" };
  }

  componentDidMount() {
    this.setState({class: "PortfolioDescription_inView"});
  }

  render() {
    return (
      <div className={this.state.class}>
        { this.props.text }
      </div>
    )
  }
}

export default PortfolioDescription
