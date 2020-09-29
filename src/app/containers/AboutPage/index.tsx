import React from 'react';

import { Helmet } from 'react-helmet-async';

import { Navbar } from 'app/containers/Navbar';

import { FullPageComponent } from 'app/components/FullPageComponent';
import { About } from 'app/components/About';
import { Footer } from '../Footer';

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Dane Emmerson</title>
        <meta name="description" content="Dane Emmerson" />
      </Helmet>
      <FullPageComponent
        Header={<Navbar id="" />}
        Body={<About />}
        Footer={<Footer id="" />}
      />
    </>
  );
}
