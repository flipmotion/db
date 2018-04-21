import React from 'react';
import placeholder from './placeholder.svg';
import './index.css';

const IndexPage = () => (
  <div className="DBPageContainer">
    <div className="DBPageContainer-Left">
      <h1>Услуги в сфере элитной недвижимости</h1>
      <p>
        Мы разработаем для вас проект любой сложности, получим разрешение на
        строительство или реконструкцию, проведем строительные работы, создадим
        дизайн интерьера и предложим техническое обслуживание.
      </p>
      <a to="/portfolio">Наши работы</a>
    </div>
    <div className="DBPageContainer-Right">
      <img src={placeholder} alt="dumb" className="DBPageContainer-Image" />
    </div>
  </div>
);

export default IndexPage;
