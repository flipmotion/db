import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Page404 from '../components/Page404';
const Wrapper = styled.div`
  display: flex;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
const activeClassName = 'ServicesRouterLink_active';
const Link = styled(props => (
  <NavLink activeClassName={activeClassName} {...props} />
))`
  padding-bottom: 0.5rem;
  text-decoration: none;
  color: grey;
  &.${activeClassName} {
    color: black;
  }
`;

const Page = styled.div``;

class Services extends React.Component {
  static propTypes = {
    services: PropTypes.array.isRequired
  };

  render() {
    const { services, current } = this.props;
    if (!services[current]) return <Page404 />;
    return (
      <Wrapper>
        <Nav>
          {services.map((service, index) => (
            <Link key={index} to={`/services/${index}`}>
              {service.name}
            </Link>
          ))}
        </Nav>
        <Page>{services[current].text}</Page>
      </Wrapper>
    );
  }
}

export default Services;
