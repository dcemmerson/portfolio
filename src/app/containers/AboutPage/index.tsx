import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from './slice';
import { selectUsername } from './selectors';

import { Helmet } from 'react-helmet-async';

import { Navbar, PageType } from 'app/containers/Navbar';

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
        Header={<Navbar id="" labels={[]} pageType={PageType.About} />}
        Body={<About />}
        Footer={<Footer id="" />}
      />
    </>
  );
}
