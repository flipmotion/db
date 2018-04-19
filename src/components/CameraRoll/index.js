import React from 'react'
import './index.scss'

class CameraRoll extends React.Component {
  render() {
    const Images = this.props.images.map((image, index) =>
      <img key={index} src={image} className="CameraRoll-Image" />
    );

    return (
      <div>
        { Images }
      </div>
    )
  }
}

export default CameraRoll
