import React from 'react';
import styled from 'styled-components';
import interfaceIn from './interfaceIn';
import PropTypes from 'prop-types';
import { Vertical } from '../common';
import ServiceSelector from './ServiceSelector';
import AreaInput from './AreaInput';
import Result from './Result';
import { area } from '../../content/calculator';

const VerticalOnMobile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 35rem) {
    flex-direction: column;
  }
`;

class Calc extends React.Component {
  static propTypes = {
    lang: PropTypes.oneOf(['ru', 'en'])
  };

  constructor() {
    super();
    this.state = { selectedServiceIndeces: [], area: area.default };
    this.onServiceToggle = this.onServiceToggle.bind(this);
  }

  onServiceToggle(serviceIndex) {
    this.setState(prevState => {
      // to make sure I don't mess up state directly. Maybe I can go without it
      // (if muting prevState won't actually mute the state)
      const selectedServiceIndecesCopy = [...prevState.selectedServiceIndeces];

      const indexOfServiceInQuestionInState = prevState.selectedServiceIndeces.indexOf(
        serviceIndex
      );

      // toggle
      indexOfServiceInQuestionInState !== -1
        ? selectedServiceIndecesCopy.splice(indexOfServiceInQuestionInState, 1)
        : selectedServiceIndecesCopy.push(serviceIndex);
      return { selectedServiceIndeces: selectedServiceIndecesCopy };
    });
  }

  render() {
    const { lang } = this.props;
    return (
      <Vertical>
        <h1>{interfaceIn(lang, 'calculate')}</h1>
        <VerticalOnMobile>
          <ServiceSelector
            lang={lang}
            selectedServiceIndeces={this.state.selectedServiceIndeces}
            toggleService={this.onServiceToggle}
          />
          <Vertical>
            <AreaInput
              value={this.state.area}
              onChange={area => this.setState({ area: String(area) })}
            />
            <Result
              lang={lang}
              selectedServiceIndeces={this.state.selectedServiceIndeces}
              area={this.state.area}
            />
          </Vertical>
        </VerticalOnMobile>
      </Vertical>
    );
  }
}

export default Calc;
