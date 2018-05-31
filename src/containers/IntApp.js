import { Component } from 'react';
import PropTypes from 'prop-types';

// A minimal app that provides a lang and a function to change that lang
// to render prop
// use it like this:
// <App  render={(lang, toggleLang) => {...}} />
// toggleLang takes no args and flips the language between 'ru' and 'en'.
class IntApp extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  };

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
