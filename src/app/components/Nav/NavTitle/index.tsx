import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  label: string;
  to: string;
  onClick: () => void;
}

export const NavTitle = (props: Props) => {
  return (
    <Wrapper>
      <Link className="navbar-brand" to="/" onClick={props.onClick}>
        Dane Emmerson
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  a {
    color: ${p => p.theme.textSecondary} !important;
    transition: 0.4s;
    font-size: 1.4rem;
  }
  a:hover {
    color: ${p => p.theme.accent} !important;
    transition: 0.3s;
  }
`;
