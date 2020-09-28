import React from 'react';
import styled from 'styled-components/macro';
import { P } from './P';
import { Helmet } from 'react-helmet-async';
import { Navbar, PageType } from 'app/containers/Navbar';
import { FullPageComponent } from '../FullPageComponent';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <FullPageComponent
        Header={<Navbar id="" labels={[]} pageType={PageType.NotFound} />}
        Body={
          <div>
            <Title>
              4
              <span role="img" aria-label="Crying Face">
                😢
              </span>
              4
            </Title>
            <P>Page not found.</P>
          </div>
        }
        Footer={<div>footer</div>}
      />
    </>
  );
}

// const Wrapper = styled.div`
// 	height: 100vh;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	flex-direction: column;
// 	min-height: 320px;
// `;

const Title = styled.div`
  // margin-top: -8vh;
  font-weight: bold;
  color: black;
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;
