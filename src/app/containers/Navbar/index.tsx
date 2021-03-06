import React from 'react';
import styled from 'styled-components/macro';
import { NavItem } from 'app/components/Nav/NavItem';
import { NavTitle } from 'app/components/Nav/NavTitle';
import { ThemeSwitch } from '../ThemeSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, selectPage } from 'page_type/slice';
import { PageType } from 'page_type/PageTypes';

// export enum PageType {
//   Home = '/',
//   Portfolio = '/portfolio',
//   About = '/about',
//   NotFound = '/undefined',
// }

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  id?: string;
  labels?: Array<string>;
  // pageType: PageType;
  visible?: boolean;
}

export const Navbar = (props: Props) => {
  // const theme = useContext(PageTypeContext);
  const selectedPageType = useSelector(selectPage);
  const dispatch = useDispatch();

  const handlePageChange = (pageType: PageType) => {
    // const value = event.target.value as SelectedPageType;
    dispatch(changePage(pageType));
  };

  return (
    <Wrapper>
      <nav
        className="row justify-content-around mx-lg-5 mx-md-4 mx-2 pt-3"
        id={props.visible ? 'visible' : 'invisible'}
      >
        <div className="col-12 col-lg-5 justify-content-between justify-content-lg-start d-flex px-4 px-md-2">
          <NavTitle
            label="Dane Emmerson"
            to="/"
            onClick={() => handlePageChange(PageType.Home)}
          />
          <span id="themeSwitch__small">
            <ThemeSwitch />
          </span>
        </div>
        <div className="col-12 col-lg-7 d-flex justify-content-center justify-content-lg-end">
          <span>
            <ul className="mr-auto">
              <NavItem
                to="/"
                label="Home"
                active={selectedPageType.selected === PageType.Home}
                onClick={() => handlePageChange(PageType.Home)}
              />
              <NavItem
                to="/resume"
                label="Resume"
                active={selectedPageType.selected === PageType.Resume}
                onClick={() => handlePageChange(PageType.Resume)}
              />{' '}
              <NavItem
                to="/projects"
                label="Projects"
                active={selectedPageType.selected === PageType.Projects}
                onClick={() => handlePageChange(PageType.Projects)}
              />
              <NavItem
                to="/about"
                label="About"
                active={selectedPageType.selected === PageType.About}
                onClick={() => handlePageChange(PageType.About)}
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

const Wrapper = styled.div`
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
  #themeSwitch__large,
  #themeSwitch__small {
    align-self: center;
  }

  @media (max-width: 600px) {
    nav a {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 992px) {
    #themeSwitch__large {
      display: none;
    }
    .nav-link {
      padding: 0.5rem 0.6rem !important;
    }
  }
  // @media (min-width: 768px) {
  //   #themeSwitch__large {
  //     display: none;
  //   }
  //   .nav-link {
  //     padding: 0.5rem 1rem;
  //   }
  // }
  @media (min-width: 992px) {
    #themeSwitch__small {
      display: none;
    }
    #themeSwitch__large {
      display: flow;
    }
    .nav-link {
      padding: 0.5rem 1rem;
    }
  }
`;
