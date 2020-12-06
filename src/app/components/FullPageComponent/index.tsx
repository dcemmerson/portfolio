import React from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { changePage, selectPage } from 'page_type/slice';
import { getSelectedPageFromWindow } from 'page_type/utils';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  //   id: string;
  Header: JSX.Element;
  Body: JSX.Element;
  Footer: JSX.Element;
}

export const FullPageComponent = (props: Props) => {
  const selectedPageType = useSelector(selectPage);
  const dispatch = useDispatch();

  // This conditional is required for case where user presses back
  // button, as we need to make sure the window location matches
  // the current selected page.
  if (getSelectedPageFromWindow() !== selectedPageType.selected) {
    console.log('wrong page');
    dispatch(changePage(getSelectedPageFromWindow()));
  }

  return (
    <Wrapper className="fullPageComponentRoot">
      {props.Header} {props.Body} {props.Footer}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: hidden;
  width: 100vw;
  // position: static;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  transition: 0.4s;
  overflow: auto;
`;
