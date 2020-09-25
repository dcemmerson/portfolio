import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from './slice';
import { selectUsername } from './selectors';

import { Helmet } from 'react-helmet-async';
import HomePageSaga from './saga';

import { Navbar, PageType } from 'app/containers/Navbar';

import { FullPageComponent } from 'app/components/FullPageComponent';

export function AboutPage() {
  const dispatch = useDispatch();
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: HomePageSaga });

  const username = useSelector(selectUsername);

  const textInputChanged = evt => {
    dispatch(actions.changeUsername(evt.target.value));
  };

  return (
    <>
      <Helmet>
        <title>Dane Emmerson</title>
        <meta name="description" content="Dane Emmerson" />
      </Helmet>
      <FullPageComponent
        Header={<Navbar id="" labels={[]} pageType={PageType.About} />}
        Body={<div>' abra bsssra'</div>}
        Footer={<div>footer</div>}
      />
    </>
  );
}
