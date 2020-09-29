import React from 'react';

import { Helmet } from 'react-helmet-async';

import { Navbar } from 'app/containers/Navbar';

import { FullPageComponent } from 'app/components/FullPageComponent';
import { Footer } from '../Footer';
import { Portfolio } from 'app/components/Portfolio';
import { PageType } from 'page_type/PageTypes';

export function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Dane Emmerson</title>
        <meta name="description" content="Dane Emmerson" />
      </Helmet>
      <FullPageComponent
        Header={<Navbar id="" />}
        Body={<Portfolio />}
        Footer={<Footer id="" />}
      />
    </>
  );
}
