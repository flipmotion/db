import React from 'react';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
  }
`;

// This is a workaround for iOS cropping 100vh blocks with
// bottom browser chrome, see
// https://nicolas-hoizey.com/2015/02/viewport-height-is-taller-than-the-visible-part-of-the-document-in-some-mobile-browsers.html
class Div100vh extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.setHeightAsWindow = this.setHeightAsWindow.bind(this);
  }

  setHeightAsWindow() {
    const node = this.myRef.current;
    node.style.height = window.innerHeight + 'px';
  }

  componentDidMount() {
    this.setHeightAsWindow();
    window.addEventListener('resize', this.setHeightAsWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setHeightAsWindow);
  }

  render() {
    return <div ref={this.myRef} {...this.props} />;
  }
}

export default Div100vh;
