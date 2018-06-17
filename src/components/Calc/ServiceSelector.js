import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import interfaceIn from '../../interfaceIn';
import contentIn from '../../content/calculator';
import { Vertical } from '../common';

const Service = styled(({ selected, ...other }) => <div {...other} />)`
cursor: pointer;

  &:not(:last-child) {
    padding-bottom: 1.5em;
  }

  &::before {
    content: '${props => (props.selected ? '◼︎' : '◻')}';
    padding: 0.5em;
  }
`;

Service.propTypes = {
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

const ServiceSelector = ({ lang, selectedServiceIndeces, toggleService }) => {
  const services = contentIn(lang);
  const phrase = phraseId => interfaceIn(lang, phraseId);
  return (
    <Vertical>
      <h2>{phrase('choose services')}</h2>
      {services.map((service, index) => (
        <Service
          key={index}
          onClick={() => toggleService(index)}
          selected={selectedServiceIndeces.includes(index)}
        >
          {service.name}
        </Service>
      ))}
    </Vertical>
  );
};

ServiceSelector.propTypes = {
  lang: PropTypes.string.isRequired,
  toggleService: PropTypes.func.isRequired,
  selectedServiceIndeces: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default ServiceSelector;
