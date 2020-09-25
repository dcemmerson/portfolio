/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const PortfolioPage = lazyLoad(
  () => import('./index'),
  module => module.PortfolioPage,
);
