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

class Form extends React.Component {
  render() {
    return <p>This is a form</p>;
  }
}

const Main = styled(({ lang, ...otherProps }) => {
  const phrase = interfaceIn(lang);
  return (
    <div {...otherProps}>
      <h1>{phrase("fill the from and we'll call back")}</h1>
      <Form />
    </div>
  );
})`
  align-self: center;
`;

const Enquiry = () => (
  <Wrapper>
    <BalanceArea />
    <Main />
    <CloseButton />
  </Wrapper>
);

export default Enquiry;
