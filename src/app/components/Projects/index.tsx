import React from 'react';
import styled from 'styled-components/macro';
import { FiExternalLink } from 'react-icons/fi';
import { changePage } from 'page_type/slice';
import { useDispatch } from 'react-redux';
import { PageType } from 'page_type/PageTypes';
import { Link } from 'react-router-dom';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  id?: string;
  class?: string;
}

export const Projects = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <Wrapper className={props.class}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9">
            <h1 className="pt-5 pb-3 pb-md-4 py-lg-5">My Projects</h1>
            <div className="divider"></div>
            <div className="pt-4 pb-2">
              <div className="py-2">
                <div className="row">
                  <div className="col-12 ">
                    <h2 className="mb-0 mb-md-2">
                      <strong className="h4">MyTie</strong>
                    </h2>
                  </div>
                </div>
                <div>
                  <div className="ml-3 ml-md-4">
                    <div className="row mb-2">
                      <div className="col-sm-6 col-xs-12">
                        {' '}
                        <em className="secondary subText">
                          August 2020 to present
                        </em>
                      </div>
                      <div className="col-sm-6 col-xs-12 justify-xs-content-start justify-content-sm-end d-flex">
                        <div className="">
                          <a
                            className="subText text-nowrap"
                            href="https://github.com/dcemmerson/my_tie"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github <FiExternalLink />
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p className="">
                          MyTie is a personal project in which I'm developing an
                          Android mobile app that allows users to filter and
                          search fly patterns to tie (for fly fishing) based on
                          materials the user has on hand. I'm building this
                          project with Dart, Flutter, and Firebase.
                        </p>
                        <p>
                          I plan to release a version on Google Play soon...{' '}
                        </p>
                        <p>
                          For more, see{' '}
                          <Link
                            to={PageType.MyTie}
                            onClick={() => dispatch(changePage(PageType.MyTie))}
                          >
                            {' '}
                            MyTie
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="row">
                  <div className="col-12 ">
                    <h2 className="mb-0 mb-md-2">
                      <strong className="h4">Pace App</strong>
                    </h2>
                  </div>
                </div>
                <div>
                  <div className="ml-3 ml-md-4">
                    <div className="row mb-2">
                      <div className="col-sm-6 col-xs-12">
                        {' '}
                        <em className="secondary subText">
                          September 2020 to present
                        </em>
                      </div>
                      <div className="col-sm-6 col-xs-12 justify-xs-content-start justify-content-sm-end d-flex">
                        <div className="">
                          <a
                            className="subText text-nowrap"
                            href="https://paceapp.net"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Pace App <FiExternalLink />
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p className="">
                          I have been working closely with the owner of the Pace
                          App and one other developer to make various
                          improvements and bug fixes to the existing iPhone,
                          Apple Watch, and Garmin Watch versions of the Pace
                          App.
                        </p>
                        <p>
                          Some of my contributions include:
                          <ul className="">
                            <li className="">
                              Resolve bugs in pre-existing iPhone and Apple
                              Watch code written in Objective-C and Swift
                            </li>
                            <li>
                              Implement additional features, including enabling
                              Bluetooth communication between Garmin watch and
                              iPhone versions of the app, as well as allow user
                              ability to share workouts on third party platforms
                              such as Strava
                            </li>
                          </ul>
                        </p>
                        <p className="sm secondary">
                          Note: Link to source code not available as I signed a
                          non-disclosure agreement to work on this project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="row">
                  <div className="col-12 ">
                    <h2 className="mb-0 mb-md-2">
                      <strong className="h4">
                        COLA Change Notification System
                      </strong>
                    </h2>
                  </div>
                </div>
                <div>
                  <div className="ml-3 ml-md-4">
                    <div className="row mb-2">
                      <div className="col-sm-5 col-xs-12">
                        {' '}
                        <em className="secondary subText">
                          January to June 2020
                        </em>
                      </div>
                      <div className="col-sm-7 col-xs-12 justify-xs-content-start justify-content-sm-end d-flex">
                        <div className="">
                          <a
                            className="subText text-nowrap"
                            href="https://cola.govapps.us"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            cola.govapps.us <FiExternalLink />
                          </a>
                          <span className="mx-2">|</span>
                          <a
                            className="subText text-nowrap"
                            href="https://github.com/dcemmerson/cola_project"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github <FiExternalLink />
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p>
                          <a
                            className="text-nowrap"
                            href="https://cola.govapps.us"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            cola.govapps.us <FiExternalLink />
                          </a>{' '}
                          is a Node.js web application built with Handlebars and
                          MySQL on the back-end, and with VanillaJS and
                          Bootstrap on the front-end.
                        </p>
                        <p className="">
                          The cost of living allowance (COLA) change
                          notification system is a project that I worked on with
                          one other intern from start to finish during my
                          internship with the US Department of State.
                        </p>

                        <p className="">
                          The app includes the following key functionallities:
                          <ul>
                            <li>
                              Detect changes in COLA rates by scraping and
                              parsing{' '}
                              <a
                                className="text-nowrap"
                                href="https://aoprals.state.gov/Web920/cola.asp"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                aoprals.state.gov <FiExternalLink />
                              </a>{' '}
                            </li>
                            <li>User signup and authentication system</li>
                            <li>User document upload and management system</li>
                            <li>Automated email notification system</li>
                          </ul>
                        </p>
                        <p>
                          For more on this project, please visit{' '}
                          <a
                            className="text-nowrap"
                            href="https://cola.govapps.us/about"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            cola.govapps.us/about <FiExternalLink />
                          </a>
                          .
                        </p>
                      </div>
                    </div>
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
  .secondary {
    color: ${p => p.theme.textSecondary} !important;
    transition: 0.3s;
  }
  .subText {
    font-size: 90%;
  }
  .sm {
    font-size: 75%;
  }

  @media (max-width: 500px) {
    .h4 {
      font-size: 75%;
    }
  }
  @media (min-width: 500px) {
    .h4 {
      font-size: 100%;
    }
  }
`;
