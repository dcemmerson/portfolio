import React, { useState } from 'react';
import styled from 'styled-components/macro';
import inca_trail from 'assets/inca_trail.jpg';

export const HomeBodyHero = () => {
  const [isLoaded, setLoaded] = useState(false);
  const placeHolder = (
    <ImageTextWrapper className={isLoaded ? 'hidden' : ''}>
      <h1>Hello. I'm Dane, a software developer.</h1>
    </ImageTextWrapper>
  );

  return (
    <div className="container pt-5 pb-3 pb-md-4 py-lg-5">
      <div className="row">
        {!isLoaded && placeHolder}
        <ImageWrapper>
          <img
            src={inca_trail}
            alt={isLoaded ? 'Inca trail' : ''}
            onLoad={() => setLoaded(true)}
          />
          <ImageTextWrapper>
            <h1 className={!isLoaded ? 'hidden' : ''}>
              Hello! I'm Dane, a software developer.
            </h1>
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
  z-index: 0;
  img {
    filter: grayscale(40%);
    width: 100%;
    opacity: 0;
    position: relative;
    border-radius: 3px;
    height: 100%;
    animation-name: transitionOpacity;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
  }
  img:hover {
    filter: grayscale(0%);
    transition: filter 1s;
  }
  @keyframes transitionOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  }
`;
const ImageTextWrapper = styled.div`
  text-align: center;
  left: 0;
  right: 0;

  color: ${p => p.theme.textSecondary};
  transition: 0.4s;
  z-index: 2;
  img + & {
    position: absolute;
  }
  .hidden {
    display: none;
  }
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
// export default HomeBodyHero;
