import React from 'react';
import styled from 'styled-components/macro';
import inca_trail from 'assets/inca_trail.jpg';

export const HeroHQ = () => {
  return (
    <Wrapper>
      <img src={inca_trail} alt="Inca trail" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
