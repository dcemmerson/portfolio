import React from 'react';
import styled from 'styled-components/macro';
import { HomeBodyHero } from './BodyHero';
import { HomeBodyText } from './BodyText';

export const HomeBody = () => {
  return (
    <div>
      <HomeBodyHero />
      <HomeBodyText />
    </div>
  );
};

const Wrapper = styled.div``;
