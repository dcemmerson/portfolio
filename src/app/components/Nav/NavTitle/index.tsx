import React from 'react';
import styled from 'styled-components/macro';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  //   id: string;
  label: string;
  to: string;
}

export const NavTitle = (props: Props) => {
  return (
    <Wrapper>
      <a className="navbar-brand" href="#">
        Dane Emmerson
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  a {
    color: ${p => p.theme.textSecondary} !important;
    transition: 0.4s;
  }
  a:hover {
    color: ${p => p.theme.textAccent} !important;
    transition: 0.3s;
  }
`;
