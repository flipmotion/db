import React from 'react';
import styled from 'styled-components';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const text = {
  Contacts: {
    ru: 'Контакты',
    en: 'Contacts'
  },
  address: {
    ru: 'Москва, Гагаринский пер., дом 16 корпус 1',
    en: 'Moscow, Gagarinskiy per., 16 building 1'
  },
  'work hours': {
    ru: 'Время работы офиса: 9:00 - 18:00',
    en: 'Work hours: 9:00 - 18:00'
  },
  phone: {
    ru: '+7 495 123 45 56',
    en: '+7 495 123 45 56'
  },
  email: {
    ru: 'info@dbcompany.ru',
    en: 'info@dbcompany.ru'
  },
  'call back': {
    ru: 'Обратный звонок',
    en: 'Call back'
  }
};

function textIn(lang) {
  return phraseId => (text[phraseId] ? text[phraseId][lang] : phraseId);
}

const TextWrapper = styled.div`
  align-self: center;
  padding: 1em;
`;

const CallBackButton = styled.div`
  border: 1px solid black;
  padding: 1em;
  cursor: pointer;
  display: inline-block;
`;

function Text({ lang }) {
  const phrase = textIn(lang);
  return (
    <TextWrapper>
      <h1>{phrase('Contacts')}</h1>
      <p>{phrase('address')}</p>
      <p>{phrase('work hours')}</p>
      <p>{phrase('phone')}</p>
      <p>{phrase('email')}</p>
      <CallBackButton>{phrase('call back')}</CallBackButton>
    </TextWrapper>
  );
}

const ResponsiveWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 30rem) {
    flex-direction: column;
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 55.745696, lng: 37.594063 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 55.745696, lng: 37.594063 }} />
      )}
    </GoogleMap>
  ))
);

// TODO: secure it by domain and potentially SSL
const key = 'AIzaSyBUuK0ksCsXFJP67rwzlnbEXiTigBnTWaM';

function Contacts({ lang }) {
  return (
    <ResponsiveWrapper>
      <Text lang={lang} />
      <MapWrapper>
        <MyMapComponent
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </MapWrapper>
    </ResponsiveWrapper>
  );
}

export default Contacts;
