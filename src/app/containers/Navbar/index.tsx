import React from 'react';
import styled from 'styled-components/macro';
import { NavItem } from 'app/components/Nav/NavItem';
import { NavTitle } from 'app/components/Nav/NavTitle';
import { ThemeSwitch } from '../ThemeSwitch';

export enum PageType {
  Home,
  Portfolio,
  About,
  NotFound,
}

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  id: string;
  labels: Array<string>;
  pageType: PageType;
}

export const Navbar = (props: Props) => {
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-lg-5 mx-md-4 mx-sm-2 pt-3">
        <NavTitle label="Dane Emmerson" to="/" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse row justify-content-end"
          id="navbarSupportedContent"
        >
          <span>
            <ul className="navbar-nav mr-auto">
              <NavItem
                to="/"
                label="Home"
                active={props.pageType === PageType.Home}
              />
              <NavItem
                to="/portfolio"
                label="Portfolio"
                active={props.pageType === PageType.Portfolio}
              />
              <NavItem
                to="/about"
                label="About"
                active={props.pageType === PageType.About}
              />
              <ThemeSwitch />
            </ul>
          </span>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${p => p.theme.text};
  nav {
    background-color: rgba(0, 0, 0, 0) !important;
    border-bottom: 1px solid ${p => p.theme.border};
  }
`;
