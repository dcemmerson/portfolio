import React from 'react';
import styled from 'styled-components/macro';
import inca_trail from 'assets/inca_trail.jpg';

const HeroImage = () => {
  return (
    <ImageWrapper>
      <img src={inca_trail} alt="Inca trail" />
      <ImageTextWrapper>
        <h1>Hello. I'm Dane, a software developer.</h1>
      </ImageTextWrapper>
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 0;
  img {
    filter: grayscale(40%);
    width: 100%;
    opacity: 0.5;
    transition: 0.4s;
    position: relative;
    border-radius: 3px;
    height: 100%;
  }
  img:hover {
    filter: grayscale(0%);
    transition: 1s;
  }
`;

const ImageTextWrapper = styled.div`
  left: 0;
  right: 0;
  text-align: center;
  position: absolute;
  color: ${p => p.theme.textSecondary};
  transition: 0.4s;
  z-index: 2;

  @media only screen and (max-width: 600px) {
    top: 20%;
    h1 {
      font-size: 30px !important;
    }
  }
  @media only screen and (min-width: 600px) {
    top: 25%;
    h1 {
      font-size: 36px !important;
    }
  }
  @media (min-width: 992px) {
    top: 40%;
    h1 {
      font-size: 40px !important;
    }
  }
  // @keyframes fadeImageIn {
  //   from {opacity: 0;}
  //   to {opacity: 0.5;}
  // }
`;

export default HeroImage;
