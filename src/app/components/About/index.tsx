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

export const About = (props: Props) => {
  return (
    <Wrapper className={props.class}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9">
            <h1 className="pt-5 pb-3 pb-md-4 py-lg-5">About Me</h1>
            <div className="divider"></div>
            <div className="pt-4 pb-2">
              {/* <h2>Education</h2> */}
              <div className="py-2">
                <div className="ml-3 ml-md-4">
                  <div className="text">
                    <p>
                      {' '}
                      Although I originally completed my degree in chemical
                      engineering at UC Davis, after working in industry for
                      several years I realized my affinity for software, coding,
                      and computer science in general. After years of dabbling
                      into programming on my own, I finally decided to follow my
                      passion and enrolled in the postbaccalaureate computer
                      science program at Oregon State University. I will be
                      graduating in December 2020 with a Bachelor of Science in
                      computer science.
                    </p>
                    <p>
                      While I enjoy software projects of all types, I have an
                      attraction towards mobile and web development. Recently I
                      have particularly enjoyed mobile development with{' '}
                      <a
                        href="https://dart.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Dart <FiExternalLink />
                      </a>{' '}
                      and the{' '}
                      <a
                        href="https://flutter.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Flutter <FiExternalLink />
                      </a>{' '}
                      Flutter framework, and web development with the{' '}
                      <a
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        React.js <FiExternalLink />
                      </a>{' '}
                      library.
                    </p>
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
	// .divider {
	// 	border-bottom: 1px solid ${p => p.theme.border};
	// }

`;
