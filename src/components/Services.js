import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Page404 from '../components/Page404';
import { NavLink } from 'react-router-dom';
import animated, { noTween } from '../animations';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  flex: none;
  background: white;
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

const Page = styled.div`
  flex: auto;
  overflow-y: auto;
`;

class Services extends React.Component {
  static propTypes = {
    services: PropTypes.array.isRequired
  };

  render() {
    const { services, current } = this.props;
    if (!services[current]) return <Page404 />;
    return (
      <Wrapper style={this.props.style}>
        <Nav>
          {services.map((service, index) => (
            <Link key={index} to={`/services/${index}`}>
              {service.name}
            </Link>
          ))}
        </Nav>
        <Page>
          {services[current].text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Page>
      </Wrapper>
    );
  }
}

const NotAnimatedServices = animated(Services, noTween);

export default NotAnimatedServices;
