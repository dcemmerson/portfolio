import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import 'styles/scss/custom.scss';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props {
  //   id: string;
  label: string;
  to: string;
  active: boolean;
  onClick: () => void;
}

export const NavItem = (props: Props) => {
  return (
    <Wrapper>
      <li className={props.active ? 'nav-item active' : 'nav-item'}>
        <Link
          className="nav-link"
          to={props.to}
          onClick={e => (props.active ? e.preventDefault() : props.onClick())}
        >
          {props.label}
          {props.active ? <span className="sr-only">(current)</span> : <></>}
        </Link>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 1.2rem;
  li {
    list-style: none;
    display: inline;
  }
  li a {
    color: ${p => p.theme.textSecondary} !important;
    transition: 0.4s;
  }
  li.active a {
    color: ${p => p.theme.text} !important;
    transition: 0.4s;
  }
  li:not(.active):hover a {
    color: ${p => p.theme.accent} !important;
    transition: 0.3s;
  }
`;
