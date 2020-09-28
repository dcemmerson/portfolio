/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const HomeBodyHero = lazyLoad(() => import('./index'));
