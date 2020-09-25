import React from 'react';
import styled from 'styled-components/macro';

export const HomeBodyText = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <TextWrapper>
            <p className="lead">Hi there, thanks for stopping by!</p>
          </TextWrapper>
        </div>
      </div>
    </div>
  );
};

const TextWrapper = styled.div`
  p {
    font-family: Montserrat;
    font-size: 22px;
  }
`;
