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
                            Website <FiExternalLink />
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
                        <p>
                          The app is currently available in the Apple App Store
                          and Garmin Connect IQ Store.
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
                            Website <FiExternalLink />
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
                          The app includes the following key functionalities:
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
              <div className="py-2">
                <div className="row">
                  <div className="col-12 ">
                    <h2 className="mb-0 mb-md-2">
                      <strong className="h4">Inventory Tracking App</strong>
                    </h2>
                  </div>
                </div>
                <div>
                  <div className="ml-3 ml-md-4">
                    <div className="row mb-2">
                      <div className="col-sm-4 col-xs-12">
                        {' '}
                        <em className="secondary subText">Summer 2020</em>
                      </div>
                      <div className="col-sm-8 col-xs-12 justify-xs-content-start justify-content-sm-end d-flex">
                        <div className="">
                          <a
                            className="subText text-nowrap"
                            href="https://trackmyinventory.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Website <FiExternalLink />
                          </a>
                          <span className="mx-2">|</span>
                          <a
                            className="subText text-nowrap"
                            href="https://github.com/dcemmerson/inventory_tracker"
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
                          I built this project with React.js on the front-end
                          and a NoSQL database (FaunaDB) on the backend,
                          deployed with Netlify.
                        </p>
                        <p className="">
                          The inventory tracker web app is a project I built for
                          a friend to keep track of his personal medical
                          inventory.
                        </p>
                        <p className="">
                          Check out a demo version at{' '}
                          <a
                            className="subText text-nowrap"
                            href="https://trackmyinventory.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            TrackMyInventory.netlify.app <FiExternalLink />
                          </a>
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
                      <strong className="h4">Chess with JavaFX</strong>
                    </h2>
                  </div>
                </div>
                <div>
                  <div className="ml-3 ml-md-4">
                    <div className="row mb-2">
                      <div className="col-sm-4 col-xs-12">
                        {' '}
                        <em className="secondary subText">Spring 2020</em>
                      </div>
                      <div className="col-sm-8 col-xs-12 justify-xs-content-start justify-content-sm-end d-flex">
                        <div className="">
                          <a
                            className="subText text-nowrap"
                            href="https://github.com/dcemmerson/chess---javafx"
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
                          I built a chess game written in Java and a graphical
                          user interface with the JavaFX library.
                        </p>
                        <p>
                          This chess implementation offers 4 different versions
                          of game play:
                          <ul>
                            <li>
                              2 Player local game - players take turns on a
                              single machine
                            </li>
                            <li>
                              2 player remote game - connect over a network to
                              another player
                            </li>
                            <li>
                              1 player vs computer - play again the computer
                            </li>
                            <li>
                              Computer vs computer - watch the computer play
                              itself
                            </li>
                          </ul>
                        </p>
                        <p>
                          Checkout the{' '}
                          <a
                            className="subText text-nowrap"
                            href="https://github.com/dcemmerson/chess---javafx"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github repo <FiExternalLink />
                          </a>{' '}
                          for a demo!
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
                      <strong className="h4">Client Server Chat</strong>
                    </h2>
                  </div>
                </div>
                <div>
                  <div className="ml-3 ml-md-4">
                    <div className="row mb-2">
                      <div className="col-sm-4 col-xs-12">
                        {' '}
                        <em className="secondary subText">Winter 2020</em>
                      </div>
                      <div className="col-sm-8 col-xs-12 justify-xs-content-start justify-content-sm-end d-flex">
                        <div className="">
                          <a
                            className="subText text-nowrap"
                            href="https://github.com/dcemmerson/CS372/tree/master/Project1"
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
                          This project is a multithreaded client-server,
                          terminal to terminal chat program written in C and
                          Python with a user interface created with the curses
                          library.
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
                      <strong className="h4">Tetris</strong>
                    </h2>
                  </div>
                </div>
                <div>
                  <div className="ml-3 ml-md-4">
                    <div className="row mb-2">
                      <div className="col-sm-4 col-xs-12">
                        {' '}
                        <em className="secondary subText">Fall 2019</em>
                      </div>
                      <div className="col-sm-8 col-xs-12 justify-xs-content-start justify-content-sm-end d-flex">
                        <div className="">
                          <a
                            className="subText text-nowrap"
                            href="https://demedia.app/tetris"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Website <FiExternalLink />
                          </a>
                          <span className="mx-2">|</span>
                          <a
                            className="subText text-nowrap"
                            href="https://github.com/dcemmerson/tetris"
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
                          I built a tetris game for fun, written in JavaScript
                          and Bootstrap with a MySQL database on the back-end
                          for keeping track of custom user created pieces and
                          high scores.
                        </p>
                        <p>
                          Give it a try{' '}
                          <a
                            className="subText text-nowrap"
                            href="https://demedia.app/tetris"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            here <FiExternalLink />.
                          </a>
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
                      <strong className="h4">Monsters Drawing</strong>
                    </h2>
                  </div>
                </div>
                <div>
                  <div className="ml-3 ml-md-4">
                    <div className="row mb-2">
                      <div className="col-sm-4 col-xs-12">
                        {' '}
                        <em className="secondary subText">Spring 2019</em>
                      </div>
                      <div className="col-sm-8 col-xs-12 justify-xs-content-start justify-content-sm-end d-flex">
                        <div className="">
                          <a
                            className="subText text-nowrap"
                            href="https://demedia.app/monsters"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Website <FiExternalLink />
                          </a>
                          <span className="mx-2">|</span>
                          <a
                            className="subText text-nowrap"
                            href="https://github.com/dcemmerson/monsters340"
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
                          I built this drawing program with a team for a
                          database course at Oregon State University.
                        </p>
                        <p>
                          We built this with JavaScript and Bootstrap on the
                          front-end and Node.js, MySQL, and Handlebars on the
                          back-end. This project features CRUD (create, read,
                          update, delete) functionallity and a user account
                          system.
                        </p>
                        <p>
                          Give it a try{' '}
                          <a
                            className="subText text-nowrap"
                            href="https://demedia.app/monsters"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            here <FiExternalLink />
                          </a>{' '}
                          and create an account, or select the 'user without
                          account' option.
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
