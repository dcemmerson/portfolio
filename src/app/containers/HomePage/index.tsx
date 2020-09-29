import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Navbar } from 'app/containers/Navbar';
import { FullPageComponent } from 'app/components/FullPageComponent';
import { HomeBody } from 'app/components/HomeBody';
import { Footer } from '../Footer';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Dane Emmerson</title>
        <meta name="description" content="Dane Emmerson" />
      </Helmet>
      <FullPageComponent
        Header={<Navbar id="" labels={[]} />}
        Body={<HomeBody />}
        Footer={<Footer id="" />}
      />
    </>
  );
}
