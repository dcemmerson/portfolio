import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import styled from 'styled-components/macro';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  id?: string;
  class?: string;
}

export const Portfolio = (props: Props) => {
  return (
    <Wrapper className={props.class}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9">
            <h1 className="py-3 py-md-4 py-lg-5">Portfolio: 2018 - Present</h1>
            <div className="divider"></div>
            <div className="pt-4 pb-2">
              <h2>Education</h2>
              <div className="py-2">
                <div className="d-flex">
                  <h3>
                    <strong>Oregon State University</strong>
                  </h3>
                  <span className="ml-2 text">(2018 to present)</span>
                </div>
                <div className="ml-3 ml-md-4">
                  <div className="text">
                    Bachelor of Science, Computer Science
                  </div>
                  <div className="sm">Expected Graduation: December 2020</div>
                </div>
              </div>
              <div className="py-3">
                <div className="d-flex">
                  <h3>
                    <strong>University of California, Davis</strong>
                  </h3>
                  <span className="ml-2 text">(2008-2012)</span>
                </div>
                <div className="ml-3 ml-md-4">
                  <div className="text">
                    Bachelor of Science, Chemical Engineering
                  </div>
                </div>
              </div>
            </div>
            <div className="divider mx-3"></div>
            <div className="pt-4 pb-2">
              <h2>Skills</h2>
              <div className="row py-2 ">
                <div className="col-6 d-flex justify-content-center">
                  <div>
                    <h3>
                      <strong>Technologies</strong>
                    </h3>
                    <div className="skill">JavaScript</div>
                    <div className="skill">TypeScript</div>
                    <div className="skill">Node.js</div>
                    <div className="skill">React.js</div>
                    <div className="skill">Dart</div>
                    <div className="skill">Flutter</div>
                    <div className="skill">Java</div>
                    <div className="skill">Python</div>
                    <div className="skill">SQL and NoSQL</div>
                    <div className="skill">Serverless</div>
                    <div className="skill">HTML</div>
                    <div className="skill">CSS</div>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-center">
                  <div>
                    <h3>
                      <strong>More...</strong>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider mx-3"></div>
            <div className="pt-4 pb-2">
              <h2>Experience</h2>
              <div className="pt-2 pb-4">
                <div className="mb-3">
                  <h3 className="mb-1">
                    <strong>Oregon State University</strong>
                  </h3>
                  <span className="text">
                    Teaching Assistant - Sept 2019 to present
                  </span>
                </div>
                <div className="ml-3 ml-md-4">
                  <div className="text">
                    I love teaching others to code. Through Oregon State
                    University, I have had the opportunity to assist in teaching
                    introductory level programming courses to undergraduates.
                    Not only have I been able to assist students learning to
                    code, but this experience has been invaluable in making me a
                    better programmer.
                  </div>
                </div>
              </div>
              <div className="pt-2 pb-4">
                <div className="mb-3">
                  <h3 className="mb-1">
                    <strong>VSFS with Department of State</strong>
                  </h3>
                  <span className="text">Intern - Jan 2020 to June 2020</span>
                </div>
                <div className="ml-3 ml-md-4">
                  <div className="text">
                    Through the{' '}
                    <a
                      href="https://vsfs.state.gov"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VSFS <FiExternalLink />
                    </a>{' '}
                    program, I had the opportunity to work with several
                    individuals from the US State Department and develop an
                    account based Node.js web app that monitors COLA (cost of
                    living allowance) rates and provides automated change
                    notification email reports.
                  </div>
                  <div className="text pt-4">
                    Please stop by{' '}
                    <a
                      href="https://cola.govapps.us"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      cola.govapps.us <FiExternalLink />
                    </a>{' '}
                    and check out the final product!
                  </div>
                </div>
              </div>
              <div className="divider mx-3"></div>
              <div className="pt-4 pb-2">
                <h2>The Past</h2>
                <div className="pt-2 pb-4">
                  <div className="mb-3">
                    <h3 className="mb-1">
                      <strong>Sierra Pacific Industries</strong>
                    </h3>
                    <span className="text">
                      Process Engineer - 2015 to 2017
                    </span>
                  </div>
                  <div className="ml-3 ml-md-4">
                    <div className="text">abra cadabra</div>
                  </div>
                </div>
                <div className="pt-2 pb-4">
                  <div className="mb-3">
                    <h3 className="mb-1">
                      <strong>Illumina, Inc</strong>
                    </h3>
                    <span className="text">
                      Research Associate - 2013 to 2015
                    </span>
                  </div>
                  <div className="ml-3 ml-md-4">
                    <div className="text">Thro</div>
                  </div>
                </div>
                <div className="pt-2 pb-4">
                  <div className="mb-3">
                    <h3 className="mb-1">
                      <strong>Genentech, Inc</strong>
                    </h3>
                    <span className="text">Intern - 2009 to 2012</span>
                  </div>
                  <div className="ml-3 ml-md-4">
                    <div className="text">Thro</div>
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
    .sm {
      font-size: 0.75rem !important;
    }
    .text {
      font-size: 1rem !important;
    }
    .skill {
      font-size: 1rem;
    }
  }
  @media (min-width: 600px) {
    .sm {
      font-size: 0.8rem !important;
    }

    .text {
      font-size: 1.1rem !important;
    }
    .skill {
      font-size: 1rem;
    }
  }
  @media (min-width: 768px) {
    .sm {
      font-size: 0.85rem !important;
    }
    .text {
      font-size: 1.2rem !important;
    }
    .skill {
      font-size: 1rem;
    }
  }
  @media (min-width: 992px) {
    .sm {
      font-size: 0.9rem !important;
    }
    .text {
      font-size: 1.2rem !important;
    }
    .skill {
      font-size: 1rem;
    }
  }
`;
