import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import 'styles/scss/custom.scss';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  //   id: string;
  label: string;
  to: string;
  active: boolean;
}

export const NavItem = (props: Props) => {
  return (
    <Wrapper>
      <li className={props.active ? 'nav-item active' : 'nav-item'}>
        <Link className="nav-link" to={props.to}>
          {props.label}
          {props.active ? <span className="sr-only">(current)</span> : <></>}
        </Link>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${p => p.theme.text};
`;
