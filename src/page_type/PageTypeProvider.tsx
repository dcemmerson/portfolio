import React from 'react';
import { useSelector } from 'react-redux';
import { selectPage, pageSliceKey, reducer } from './slice';
import { useInjectReducer } from 'redux-injectors';
// import { PageType, pageTypes } from './PageTypes';
import { PageState } from './types';
import { PageType } from './PageTypes';

export const PageTypeContext = React.createContext({
  selected: PageType.Home,
} as PageState);
// const PageContext = useContext();

export const PageTypeProvider = (props: { children: React.ReactChild }) => {
  useInjectReducer({ key: pageSliceKey, reducer: reducer });

  const page = useSelector(selectPage);

  return (
    <PageTypeContext.Provider value={page}>
      {React.Children.only(props.children)}
    </PageTypeContext.Provider>
  );
};
