/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components/macro';
import { ThemeContext } from 'styled-components';

import { GlobalStyle } from 'styles/global-styles';
import { HomePage } from './containers/HomePage/Loadable';
import { PortfolioPage } from './containers/PortfolioPage/Loadable';
import { AboutPage } from './containers/AboutPage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { Navbar, PageType } from './containers/Navbar';

export function App() {
  const theme = useContext(ThemeContext);

  const Style = GlobalStyle(theme);
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - dcemmerson" defaultTitle="React Boilerplate">
        <meta name="description" content="Dane Emmerson" />
      </Helmet>
      <Wrapper>
        <Navbar pageType={PageType.NotFound} visible={true} />
        <Route
          render={({ location }) => {
            return (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/resume" component={PortfolioPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route component={NotFoundPage} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        ></Route>
      </Wrapper>

      <Style />
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  .fullPageComponentRoot {
    position: absolute;
    left: 0;
    right: 0;
  }

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }
  .fade-appear {
    opacity: 0;
  }
  .fade-appear-active,
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms linear 100ms;
  }
  .fade-exit {
    // overflow: hidden;
    opacity: 1;
  }
  .fade-exit.fade-exit-active {
    transform: translate(0, 10%);
    clip: rect(0, 100vw, 90vh, 0);
    opacity: 0;
    transition: opacity 250 ease-out, transform 250, clip 250;
  }
`;
