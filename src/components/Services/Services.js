import React from 'react';
import styled from 'styled-components';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
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
    font-weight: bold;
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
          {menu.map(service => {
            const Component = service.component;
            return (
              <Route
                key={service.path}
                path={service.path}
                render={() => <Component lang={lang} />}
              />
            );
          })}
          <Redirect to="/services/approval" />
        </Switch>
      </Page>
    </Wrapper>
  );
}

export default Services;
