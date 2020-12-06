import React from 'react';

import { Helmet } from 'react-helmet-async';

import { Navbar } from 'app/containers/Navbar';

import { FullPageComponent } from 'app/components/FullPageComponent';
import { Footer } from '../Footer';
import { Resume } from 'app/components/Resume';

export function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Dane Emmerson</title>
        <meta name="resume" content="Dane Emmerson" />
      </Helmet>
      <FullPageComponent
        Header={<Navbar id="" />}
        Body={<Resume />}
        Footer={<Footer id="" />}
      />
    </>
  );
}
