import React from 'react';
import styled from 'styled-components';
import { pageTextIn, servicesIn } from '../../content/calc';
import Calculator from './Calculator';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  flex: auto;
  align-items: center;
`;

const Service = styled(({ selected, ...otherProps }) => (
  <div {...otherProps} />
))`
cursor: pointer;

  &:not(:last-child) {
    padding-bottom: 1.5em;
  }

  &::before {
    content: '${props => (props.selected ? '◼︎' : '◻')}';
    padding: 0.5em;
  }
`;

const SelectorArea = styled.div`
  padding: 2em;
`;

class Calc extends React.Component {
  constructor() {
    super();
    this.state = { selectedServices: [] };
    this.toggleSelectedServices = this.toggleSelectedServices.bind(this);
  }

  toggleSelectedServices(serviceIndex) {
    this.setState(({ selectedServices }) => {
      const selectedServicesCopy = [...selectedServices];
      const indexOfServiceInQuestionInState = selectedServices.indexOf(
        serviceIndex
      );
      indexOfServiceInQuestionInState !== -1
        ? selectedServicesCopy.splice(indexOfServiceInQuestionInState, 1)
        : selectedServicesCopy.push(serviceIndex);
      return { selectedServices: selectedServicesCopy };
    });
  }

  render() {
    const { lang } = this.props;
    const services = servicesIn(lang);
    return (
      <Wrapper>
        <h1>{pageTextIn(lang).pageName}</h1>
        <Main>
          <SelectorArea>
            {services.map((service, index) => (
              <Service
                key={index}
                onClick={() => this.toggleSelectedServices(index)}
                selected={this.state.selectedServices.includes(index)}
              >
                {service.name}
              </Service>
            ))}
          </SelectorArea>
          <Calculator
            priceRanges={this.state.selectedServices.map(
              serviceIndex => services[serviceIndex].price
            )}
          />
        </Main>
      </Wrapper>
    );
  }
}

export default Calc;
