import { createGlobalStyle } from 'styled-components';
import './scss/fonts.scss';
import { Theme } from './theme/themes';

export const GlobalStyle = (theme: Theme) => createGlobalStyle`

	body, div, span, p, a {
		font-family: 'Montserrat';
  }
  
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Montserrat';
    // Only necessary because our font choice seems to cause some overflow
    // issues on specific page sizes. If we use a default web font, the issue
    // disappears...
    overflow-x: hidden; 
    background-color: ${theme.background} !important;
    color: ${theme.text} !important;
  }

  a {
    color: ${theme.accent} !important;
  }
  
	@media (max-width: 600px) {
		h1 {
			font-size: 1.75rem !important;
    }
    h2 {
      font-size: 1.6rem !important;
    }
    h3 {
      font-size: 1.1rem !important;
		}
    div, p, a {
      font-size: 1rem;
    }
    footer {
      div, p, a {
        font-size: 0.8rem !important;
      }
    }
	}
	@media (min-width: 600px) {
		h1 {
			font-size: 2.25rem !important;
    }
    h2 {
      font-size: 1.8rem !important;
    }
    h3 {
      font-size: 1.1rem !important;
		}
    div, p, a {
      font-size: 1.0rem;
    }
    footer {
      div, p, a {
        font-size: 0.85rem !important;
      }
    }
	}
	@media (min-width: 768px) {
		h1 {
			font-size: 2.5rem !important;
    }
    h2 {
      font-size: 2rem !important;
    }
    h3 {
      font-size: 1.2rem !important;
		}
    div, p, a {
      font-size: 1.25rem;
    }
    footer {
      div, p, a {
        font-size: 0.9rem !important;
      }
    }
  }
  @media (min-width: 992px) {
		h3 {
      font-size: 1.3rem !important;
		}
    footer {
      div, p, a {
        font-size: 1.0rem !important;
      }
    }
	}

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
	}
	.divider {
		border-bottom: 1px solid ${theme.border};
	}
`;
