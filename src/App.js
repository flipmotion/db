import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import 'bootstrap/dist/css/bootstrap-reboot.css';

import Header from './components/Menu/Header';
import Footer from './components/Menu/Footer';

import AppRouter from './containers/AppRouter';

const SiteContainer = styled.div`
  display: flex;
  background-color: #222;
  color: white;
  flex-direction: column;
  height: 100vh;
`;

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }
`;

const HeaderArea = styled.div`
  flex: none;
  display: flex;
`;

const MainArea = styled.div`
  display: flex;

  /* flex: 1 1 auto => flex: 1 1 0 and height: 0, see
  https://github.com/philipwalton/flexbugs/issues/197#issuecomment-378908438 */
  flex: auto;
  /* height: 0; */

  /* otherwise min sizes are content dimensions */
  /* https://github.com/philipwalton/flexbugs#flexbug-1 */
  min-height: 0;
  min-width: 0;
  position: relative;

  /* Otherwise width/height specified in % won't work in children */
  height: 100%;
  width: 100%;

  /* So all children pages are absolutely positioned and don't interfere */
  position: relative;
`;

const FooterArea = styled.div`
  flex: none;
  display: flex;
`;

const App = () => (
  <Router>
    <SiteContainer>
      <HeaderArea>
        <Header />
      </HeaderArea>
      <MainArea>
        <AppRouter />
      </MainArea>
      <FooterArea>
        <Footer />
      </FooterArea>
    </SiteContainer>
  </Router>
);

export default App;
