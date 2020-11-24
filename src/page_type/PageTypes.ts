export enum PageType {
  Home = '/',
  Resume = '/resume',
  Projects = '/projects',
  About = '/about',
  MyTie = '/MyTie',
  NotFound = '/undefined',
}

export const pageTypes = {
  home: PageType.Home,
  resume: PageType.Resume,
  projects: PageType.Projects,
  about: PageType.About,
  notFound: PageType.NotFound,
};
