import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { FiExternalLink } from 'react-icons/fi';
import { PageType } from 'page_type/PageTypes';
import { changePage } from 'page_type/slice';
import { useDispatch } from 'react-redux';

export const HomeBodyText = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9">
          <TextWrapper>
            <p>Hi there, I'm Dane. Thanks for stopping by!</p>
            <p>
              I enjoy learning about and working on all things software. Please
              take a look at my{' '}
              <Link
                to="/resume"
                onClick={() => dispatch(changePage(PageType.Resume))}
              >
                resume
              </Link>{' '}
              and{' '}
              <Link
                to="about"
                onClick={() => dispatch(changePage(PageType.About))}
              >
                about
              </Link>{' '}
              pages and swing by my{' '}
              <a
                href="https://github.com/dcemmerson"
                target="_blank"
                rel="noopener noreferrer"
              >
                github <FiExternalLink />
              </a>
              .
            </p>
            <p>
              When I'm not writing code, you can find me outdoors, biking around
              Northern California.
            </p>
          </TextWrapper>
        </div>
      </div>
    </div>
  );
};

const TextWrapper = styled.div`
  p {
    padding: 0.5rem;
  }
`;
