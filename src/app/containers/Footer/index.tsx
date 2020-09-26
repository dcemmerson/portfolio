import { FooterBody } from 'app/components/Footer/FooterBody';
import React from 'react';
import styled from 'styled-components/macro';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  id: string;
}

export const Footer = (props: Props) => {
  return (
    <Wrapper>
      <FooterBody />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${p => p.theme.textSecondary};
  footer {
    background-color: rgba(0, 0, 0, 0) !important;
  }
`;
