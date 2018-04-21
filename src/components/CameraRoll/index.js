import React from 'react';
import './index.css';

class CameraRoll extends React.Component {
  render() {
    const Images = this.props.images.map((image, index) => (
      <img key={index} src={image} className="CameraRoll-Image" />
    ));

    return <div className="CameraRoll-Container">{Images}</div>;
  }
}

export default CameraRoll;
