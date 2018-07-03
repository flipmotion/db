import { PureComponent } from 'react';
import PropTypes from 'prop-types';

// A minimal app that provides a lang and a function to change that lang
// to render prop
// use it like this:
// <App  render={(lang, toggleLang) => {...}} />
// toggleLang takes no args and flips the language between 'ru' and 'en'.

const LANG = {
  RU: 'ru',
  EN: 'en'
};

class IntApp extends PureComponent {
  static propTypes = {
    children: PropTypes.func
  };

  static defaultProps = {
    children: () => {}
  };

  state = {
    lang: LANG.RU
  };

  toggleLang = () => {
    const { lang } = this.state;
    const { EN, RU } = LANG;

    const newLang = lang === RU ? EN : RU;

    this.setState({
      lang: newLang
    });
  };

  render() {
    const { children } = this.props;
    const { lang } = this.state;

    return children(lang, this.toggleLang);
  }
}

export default IntApp;
