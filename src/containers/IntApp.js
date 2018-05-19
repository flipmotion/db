import { Component } from 'react';

// A minimal app that provides a lang and a function to change that lang
// to render prop
// use it like this:
// <App  render={(lang, toggleLang) => {...}} />
// toggleLang flips between 'ru' and 'en'.
class IntApp extends Component {
  constructor() {
    super();
    this.state = { lang: 'ru' };
    this.toggleLang = this.toggleLang.bind(this);
  }

  toggleLang() {
    this.setState(
      state => (state.lang === 'ru' ? { lang: 'en' } : { lang: 'ru' })
    );
  }

  render() {
    return this.props.render(this.state.lang, this.toggleLang);
  }
}

export default IntApp;
