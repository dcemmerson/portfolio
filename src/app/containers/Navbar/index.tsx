import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { NavItem } from 'app/components/Nav/NavItem';
import { NavTitle } from 'app/components/Nav/NavTitle';
import { ThemeSwitch } from '../ThemeSwitch';

export enum PageType {
  Home = '/',
  Portfolio = '/portfolio',
  About = '/about',
  NotFound = '/undefined',
}

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  id?: string;
  labels?: Array<string>;
  pageType: PageType;
  visible?: boolean;
}

export const Navbar = (props: Props) => {
  // const [pageType, setPageType]: [PageType, Function] = useState(PageType.Home);
  const [pageType, setPageType] = useState(getPageType());

  function getPageType(): PageType {
    switch (window.location.pathname.toLowerCase()) {
      case '/':
        return PageType.Home;
      case '/resume':
        return PageType.Portfolio;
      case '/about':
        return PageType.About;
      default:
        return PageType.NotFound;
    }
  }

  function updateCurrentPageType(pageTypeSelected: PageType) {
    if (pageTypeSelected !== pageType) {
      setPageType(pageTypeSelected);
    } else {
    }
  }

  return (
    <Wrapper>
      <nav
        className="row justify-content-around mx-lg-5 mx-md-4 mx-2 pt-3"
        id={props.visible ? 'visible' : 'invisible'}
      >
        <div className="col-12 col-md-5 justify-content-between justify-content-md-start d-flex px-4 px-md-2">
          <NavTitle
            label="Dane Emmerson"
            to="/"
            onClick={() => updateCurrentPageType(PageType.Home)}
          />
          <span id="themeSwitch__small">
            <ThemeSwitch />
          </span>
        </div>
        <div className="col-12 col-md-7 d-flex justify-content-center justify-content-md-end">
          <span>
            <ul className="mr-auto">
              <NavItem
                to="/"
                label="Home"
                active={getPageType() === PageType.Home}
                onClick={() => updateCurrentPageType(PageType.Home)}
              />
              <NavItem
                to="/resume"
                label="Resume"
                active={getPageType() === PageType.Portfolio}
                onClick={() => updateCurrentPageType(PageType.Portfolio)}
              />
              <NavItem
                to="/about"
                label="About"
                active={getPageType() === PageType.About}
                onClick={() => updateCurrentPageType(PageType.About)}
              />
              <span id="themeSwitch__large">
                <ThemeSwitch />
              </span>
            </ul>
          </span>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`\
#visible {
	position: absolute;
	z-index: 100;
	// display: none;
}
#invisible {
	visibility: hidden;
}
	nav {
		left: 0;
		right: 0;
		max-width: 100vw;
		background-color: ${p => p.theme.navbarBackgroundColor};
		border-bottom: 1px solid ${p => p.theme.border};
		transition: top 0.4s;
	}
	ul {
		display: flex;
		flex-direction: row;
	}
	#themeSwitch__large, #themeSwitch__small {
		align-self: center;
	}

	@media (max-width: 768px) {
		#themeSwitch__large {
			display: none;
		}

	}
	@media (min-width: 768px) {
		#themeSwitch__small {
			display: none;
		}

`;
