import React from 'react';
import styled from 'styled-components/macro';
import { FiExternalLink } from 'react-icons/fi';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  id?: string;
  class?: string;
}

export const MyTie = (props: Props) => {
  return (
    <Wrapper className={props.class}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9">
            <h1 className="pt-5">MyTie</h1>
            <h2 className="pb-3 pb-md-4 pb-lg-5">
              <i>A mobile app</i>
            </h2>
            <div className="divider"></div>
            <div className="pt-4 pb-2">
              <div className="py-2">
                <div className="ml-3 ml-md-4">
                  <div className="text">
                    <p>
                      MyTie is a free mobile app targeting Android devices (for
                      now at least).
                    </p>
                    <p>
                      The goal of the project is to create a flexible mobile app
                      for fly fishing that allows users to filter and search fly
                      tying patterns based on materials the user has on hand.
                      The app also allows users to upload additional fly
                      patterns with photos and instructions to the app for other
                      users to tie the fly.
                    </p>
                    <p>
                      MyTie is currently in the early stages of development,
                      being built with{' '}
                      <a
                        href="https://dart.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Dart <FiExternalLink />
                      </a>
                      ,{' '}
                      <a
                        href="https://flutter.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Flutter <FiExternalLink />
                      </a>
                      , and{' '}
                      <a
                        href="https://firebase.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Firebase <FiExternalLink />
                      </a>
                      , but I hope to release an early version of the app on
                      Google Play by mid November, 2020.
                    </p>
                    <p>Updates to come...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (max-width: 600px) {
    h1 + h2 i {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 600px) {
    h1 + h2 i {
      font-size: 1.4rem;
    }
  }
  @media (min-width: 768px) {
    h1 + h2 i {
      font-size: 1.6rem;
    }
  }
`;
