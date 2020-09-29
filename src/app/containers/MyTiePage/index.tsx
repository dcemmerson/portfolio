import React from 'react';

import { Helmet } from 'react-helmet-async';

import { Navbar } from 'app/containers/Navbar';

import { FullPageComponent } from 'app/components/FullPageComponent';
import { Footer } from '../Footer';
import { MyTie } from 'app/components/MyTie';

export function MyTiePage() {
  return (
    <>
      <Helmet>
        <title>Dane Emmerson</title>
        <meta name="description" content="Dane Emmerson" />
      </Helmet>
      <FullPageComponent
        Header={<Navbar id="" />}
        Body={<MyTie />}
        Footer={<Footer id="" />}
      />
    </>
  );
}
