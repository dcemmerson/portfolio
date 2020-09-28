import React, { lazy, Suspense } from 'react';
// import styled from 'styled-components/macro';
import { HomeBodyHero } from './BodyHero';
import { HomeBodyText } from './BodyText';

// const HomeBodyHero = lazy(() => import('./BodyHero'));

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  id?: string;
  class?: string;
}

export const HomeBody = (props: Props) => {
  return (
    <div className={props.class}>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <HomeBodyHero />
      {/* </Suspense> */}
      <HomeBodyText />
    </div>
  );
};
