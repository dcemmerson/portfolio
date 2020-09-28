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
      case '/portfolio':
        return PageType.Portfolio;
      case '/about':
        return PageType.About;
      default:
        return PageType.NotFound;
    }
  }
  // let navbarInProgress: boolean = false;
  // const body = document.getElementsByTagName('body')[0];
  // let prevScrollYPos: number = body.scrollTop;

  // useEffect(() => {
  // 	body.addEventListener('scroll', _handleScroll);
  // 	// return body.removeEventListener('scroll', _handleScroll);
  // 	function _handleScroll() {
  // 		if (!navbarInProgress) {
  // 			navbarInProgress = true;

  // 			const currScrollYPos: number = body.scrollTop;
  // 			console.log(currScrollYPos);

  // 			const nav = document.getElementById('visibleNavbar');
  // 			if (prevScrollYPos > currScrollYPos && nav) {
  // 				nav.style.top = '0';
  // 			} else if (
  // 				nav &&
  // 				currScrollYPos > nav.clientHeight * 1.5 &&
  // 				currScrollYPos > prevScrollYPos
  // 			) {
  // 				nav.style.top = `-${nav.clientHeight}px`;
  // 			}
  // 			prevScrollYPos = currScrollYPos;
  // 			setTimeout(() => (navbarInProgress = false), 200);
  // 		}
  // 	}
  // }, []);

  // return document.removeEventListener('wheel', _handleScroll);

  return (
    <Wrapper>
      <nav
        className="row justify-content-around mx-lg-5 mx-md-4 mx-sm-2 pt-3 "
        id={props.visible ? 'visible' : 'invisible'}
      >
        <div className="col-12 col-md-5 justify-content-between justify-content-md-start d-flex px-4 px-md-2">
          <NavTitle label="Dane Emmerson" to="/" />
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
                // @ts-ignore
                active={getPageType() === PageType.Home}
                onClick={() => setPageType(PageType.Home)}
              />
              <NavItem
                to="/portfolio"
                label="Portfolio"
                // @ts-ignore
                active={getPageType() === PageType.Portfolio}
                onClick={() => setPageType(PageType.Portfolio)}
              />
              <NavItem
                to="/about"
                label="About"
                // @ts-ignore
                active={getPageType() === PageType.About}
                onClick={() => setPageType(PageType.About)}
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
// 	z-index: 100;
	nav {
		// position: fixed;
		left: 0;
		right: 0;
		background-color: ${p => p.theme.navbarBackgroundColor};
		border-bottom: 1px solid ${p => p.theme.borderSecondary};
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
