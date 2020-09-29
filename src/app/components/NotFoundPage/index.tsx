import React from 'react';
import styled from 'styled-components/macro';
import { P } from './P';
import { Helmet } from 'react-helmet-async';
import { Navbar } from 'app/containers/Navbar';
import { FullPageComponent } from '../FullPageComponent';
import { PageType } from 'page_type/PageTypes';
import { Footer } from 'app/containers/Footer';

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
          <div className="container">
            <div className="row align-items-center pt-5">
              <div className="col d-flex justify-content-center">
                <div className="">
                  <Title>
                    4
                    <span role="img" aria-label="Crying Face">
                      😢
                    </span>
                    4
                  </Title>
                  <P>Page not found.</P>
                </div>
              </div>
            </div>
          </div>
        }
        Footer={<Footer id="" />}
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
  // color: black;
  font-size: 3.375rem;
  align-items: justify-content-center;

  span {
    font-size: 3.125rem;
  }
`;
