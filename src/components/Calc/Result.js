import React from 'react';
import PropTypes from 'prop-types';
import interfaceIn from './interfaceIn';
import { Vertical } from '../common';
import servicesIn from '../../content/calculator';

function formatCurrency(number) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB'
  }).format(number);
}

// <Result range={this.priceRange()} lang={this.props.lang} />

const Result = ({ selectedServiceIndeces, area, lang }) => {
  const phrase = phrase => interfaceIn(lang, phrase);
  const allServices = servicesIn(lang);
  const selectedServices = selectedServiceIndeces.map(i => allServices[i]);
  const resultMinPrice = selectedServices
    .map(service => service.price.min)
    .reduce((prev, curr) => prev + curr * Number(area), 0);
  const resultMaxPrice = selectedServices
    .map(service => service.price.max)
    .reduce((prev, curr) => prev + curr * Number(area), 0);
  return (
    <Vertical>
      <h3>{phrase('calculation result')}</h3>
      <p>
        min: {formatCurrency(resultMinPrice)}, max:{' '}
        {formatCurrency(resultMaxPrice)}
      </p>
      <p>
        <a href="#inquiry">{phrase('leave an enquiry')}</a>
        {phrase('and we will calulcate')}
      </p>
    </Vertical>
  );
};

Result.propTypes = {
  selectedServiceIndeces: PropTypes.arrayOf(PropTypes.number).isRequired,
  lang: PropTypes.string.isRequired,
  area: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Result;
