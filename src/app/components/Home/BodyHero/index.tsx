import React from 'react';
import styled from 'styled-components/macro';
import inca_trail from 'assets/inca_trail.jpg';

export const HomeBodyHero = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ImageWrapper>
            <img src={inca_trail} alt="Inca trail" />
          </ImageWrapper>
          <ImageTextWrapper>abcdeeee</ImageTextWrapper>
        </div>
      </div>
    </div>
  );
};

const ImageWrapper = styled.div`
  // width: 100%;
  // height: 100%;
  img {
    width: 100%;
    opacity: 0.5;
    transition: 0.4s;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;
const ImageTextWrapper = styled.div``;
