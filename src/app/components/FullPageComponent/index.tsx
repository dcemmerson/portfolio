import React from 'react';
import styled from 'styled-components/macro';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  //   id: string;
  Header: JSX.Element;
  Body: JSX.Element;
  Footer: JSX.Element;
}

export const FullPageComponent = (props: Props) => {
  return (
    <Wrapper id="fullPageComponentRoot">
      {props.Header} {props.Body} {props.Footer}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: hidden;
  width: 100vw;
  position: static;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  transition: 0.4s;
`;
