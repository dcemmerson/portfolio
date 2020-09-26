import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { SiRedux, SiReact } from 'react-icons/si';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const FooterBody = memo(() => {
  return (
    <Wrapper>
      <div className="container-fluid pt-lg-5 pt-4">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center">
            <p>
              <a href="mailto:dcemmerson@gmail.com">dcemmerson@gmail.com</a>
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center">
            <p className="sm">Last updated: September 2020</p>
          </div>
          <div className="col-md-4 col-12 d-flex justify-content-center">
            <p>
              Built with{' '}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiReact className="siReact" />
              </a>{' '}
              <a
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiRedux className="siRedux" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.footer`
  .siReact,
  .siRedux {
    width: 1.5rem;
    height: 1.5rem;
  }
  .siReact {
    color: #61dafb;
  }
  .siRedux {
    color: #764abc;
  }
  // .sm {
  // 	font-size: 90% !important;
  // }
`;
