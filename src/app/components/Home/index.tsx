import React, { lazy, Suspense } from 'react';
// import styled from 'styled-components/macro';
import { HomeBodyHero } from './BodyHero';
import { HomeBodyText } from './BodyText';

// const HomeBodyHero = lazy(() => import('./BodyHero'));

export const HomeBody = () => {
  return (
    <div>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <HomeBodyHero />
      {/* </Suspense> */}
      <HomeBodyText />
    </div>
  );
};
