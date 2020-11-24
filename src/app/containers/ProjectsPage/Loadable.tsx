/**
 * Asynchronously loads the component for MyTiePage
 */

import { lazyLoad } from 'utils/loadable';

export const ResumePage = lazyLoad(
  () => import('./index'),
  module => module.ProjectsPage,
);
