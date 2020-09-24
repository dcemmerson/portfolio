import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import 'styles/scss/custom.scss';
import { NavItem } from '../../components/NavItem';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  id: string;
  labels: Array<string>;
}

export const Navbar = (props: Props) => {
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-lg-5 mx-md-4 mx-sm-2 pt-3">
        <a className="navbar-brand" href="#">
          Dane Emmerson
        </a>
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
              <NavItem to="/" label="Home" active={true} />
              <NavItem to="/portfolio" label="Portfolio" active={false} />
              <NavItem to="/about" label="About" active={false} />
            </ul>
          </span>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${p => p.theme.text};
`;
