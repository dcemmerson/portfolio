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
// import { AnimatedSwitch } from 'react-router-transition';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { PortfolioPage } from './containers/PortfolioPage/Loadable';
import { AboutPage } from './containers/AboutPage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import styled from 'styled-components/macro';
import { ThemeContext } from 'styled-components';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  // //   id: string;
  // label: string;
  // to: string;
  // active: boolean;
}

export function App(props: Props) {
  const theme = useContext(ThemeContext);

  const Style = GlobalStyle(theme);
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - dcemmerson" defaultTitle="React Boilerplate">
        <meta name="description" content="Dane Emmerson" />
      </Helmet>
      <Wrapper>
        <Switch>
          {/* <AnimatedSwitch
					atEnter={{ opacity: 0 }}
					atLeave={{ opacity: 0 }}
					atActive={{ opacity: 1 }}
					className="switch-wrapper"
				> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/about" component={AboutPage} />
          {/* <Route exact path="/portfolio" component={Portfolio} /> */}
          <Route component={NotFoundPage} />
          {/* </AnimatedSwitch> */}
        </Switch>
      </Wrapper>

      <Style />
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  .switch-wrapper {
    position: relative;
  }

  .switch-wrapper > div {
    position: absolute;
  }
`;
