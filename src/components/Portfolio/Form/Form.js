import React from 'react';
import styled from 'styled-components';
import interfaceIn from './interfaceIn';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1em;
  justify-content: space-between;
  box-sizing: border-box;
`;

const CloseButton = styled(props => <div {...props}>X</div>)`
  align-self: flex-start;
`;

// Just for symmetry with CloseButton
function BalanceArea() {
  return (
    <div style={{ visibility: 'hidden' }}>
      <CloseButton />
    </div>
  );
}

const Main = styled(({ lang, ...otherProps }) => (
  <div {...otherProps}>
    {interfaceIn(lang)("fill the from and we'll call back")}
  </div>
))`
  align-self: center;
`;

const Form = () => (
  <Wrapper>
    <BalanceArea />
    <Main />
    <CloseButton />
  </Wrapper>
);

export default Form;
