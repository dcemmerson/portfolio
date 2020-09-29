/**
 * Asynchronously loads the component for MyTiePage
 */

import { lazyLoad } from 'utils/loadable';

export const MyTiePage = lazyLoad(
  () => import('./index'),
  module => module.MyTiePage,
);
