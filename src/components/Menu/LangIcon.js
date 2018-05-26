import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;

  margin: 0.5rem 0;

  /* https://www.webpagefx.com/blog/web-design/disable-text-selection/ */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer */
  -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
  user-select: none;
`;

const LangIcon = props => (
  <Wrapper onClick={props.onClick} onSelect={e => console.log(e)}>
    {props.lang === 'ru' ? (
      <div>
        <b>Ru</b> / En
      </div>
    ) : (
      <div>
        Ru / <b>En</b>
      </div>
    )}
  </Wrapper>
);
export default LangIcon;
