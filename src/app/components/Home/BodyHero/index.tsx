import React from 'react';
import styled from 'styled-components/macro';
import inca_trail from 'assets/inca_trail.jpg';

export const HomeBodyHero = () => {
  return (
    <div className="container py-lg-5 py-md-4 py-sm-2">
      <div className="row">
        <ImageWrapper>
          <img src={inca_trail} alt="Inca trail" />
          <ImageTextWrapper>
            <span>Greetings. I'm Dane, a software developer.</span>
          </ImageTextWrapper>
        </ImageWrapper>
      </div>
    </div>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    opacity: 0.5;
    transition: 0.4s;
    position: relative;
    border-radius: 3px;
  }
`;
const ImageTextWrapper = styled.div`
  text-align: center;
  position: absolute;
  color: ${p => p.theme.textSecondary};
  transition: 0.4s;

  @media only screen and (max-width: 600px) {
    top: 20%;
    font-size: 30px;
  }
  @media only screen and (min-width: 600px) {
    top: 25%;
    font-size: 36px;
  }
  @media (min-width: 992px) {
    top: 40%;
    font-size: 40px;
  }
`;
