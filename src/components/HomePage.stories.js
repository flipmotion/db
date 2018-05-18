// import React, { Component } from 'react';
// import { storiesOf } from '@storybook/react';
// import HomePage from './HomePage';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
// import Menu from './Menu/Menu';
// import MenuItem from './Menu/MenuItem';
// import LangIcon from './Menu/LangIcon';
// import contentIn from '../content'

// const homePage = storiesOf('Home page', module);

// homePage.addDecorator(story => (
//   <Router>
//     <Menu
//       links={contentIn('ru').menu.top.map((item, index) => (
//         <MenuItem to={item.to} key={index}>
//           {item.text}
//         </MenuItem>
//       ))}
//     >
//       {story()}
//     </Menu>
//   </Router>
// ));

// homePage.addDecorator(withKnobs);

// class IntApp extends Component {
//   constructor() {
//     super();
//     this.state = {lang: 'ru'};
//     this.toggleLang = this.toggleLang.bind(this);
//   }

//   toggleLang() {
//     this.setState(state => state.lang === 'ru' ? {lang: 'en'} : {lang: 'ru'})
//   }

//   render() {
//     return (
//       <Menu
//         logo={<Logo />}
//         links={contentIn(this.state.lang).menu.top.map((item, index) => (
//           <MenuItem key={index} to={item.to}>
//             {item.text}
//           </MenuItem>
//         ))}
//         icon={<LangIcon onClick={this.toggleLang} />}
//         children={<Content />}
//       />
//     )
//   }
// }

// menu.add('Translation', () => <IntApp />);

// homePage.add('Home page', () => (
//   <HomePage
//     animationStage={boolean('visible', true) ? 'entered' : 'exited'}
//     header={text('Header', globalState.content.homePage.header)}
//     paragraphText={text(
//       'Paragraph text',
//       globalState.content.homePage.paragraphText
//     )}
//     linkText={text('Link text', globalState.content.homePage.link.text)}
//     linkPath={globalState.content.homePage.link.path}
//     imageSrc={globalState.content.homePage.media[0].src}
//     imageAlt={globalState.content.homePage.media[0].alt}
//   />
// ));
