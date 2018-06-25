import React from 'react';
import styled from 'styled-components';
import Page404 from '../../components/Page404';
import { Route, Switch, NavLink } from 'react-router-dom';
import Approval from './Approval';
import Construction from './Construction';
import Maintenance from './Maintenance';

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
  width: 22em;
`;

const activeClassName = 'ServicesRouterLink_active';
const Link = styled(props => (
  <NavLink activeClassName={activeClassName} {...props} />
))`
  padding-bottom: 2.5rem;
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

const menu = [
  {
    name: {
      ru: 'Согласование',
      en: 'Approval'
    },
    path: '/services/approval',
    component: Approval
  },
  {
    name: {
      ru: 'Строительство',
      en: 'Construction'
    },
    path: '/services/construction',
    component: Construction
  },
  {
    name: {
      ru: 'Обслуживание',
      en: 'Maintenance'
    },
    path: '/services/maintenance',
    component: Maintenance
  }
];

function Services({ lang }) {
  return (
    <Wrapper>
      <Nav>
        {menu.map(service => (
          <Link key={service.path} to={service.path}>
            {service.name[lang]}
          </Link>
        ))}
      </Nav>
      <Page>
        <Switch>
          {menu.map(service => (
            <Route
              key={service.path}
              exact
              path={service.path}
              component={service.component}
            />
          ))}
        </Switch>
      </Page>
    </Wrapper>
  );
}

export default Services;
