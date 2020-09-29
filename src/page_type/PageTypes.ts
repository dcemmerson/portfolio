export enum PageType {
  Home = '/',
  Resume = '/resume',
  About = '/about',
  MyTie = '/MyTie',
  NotFound = '/undefined',
}

const homePage: PageType = PageType.Home;
const resumePage: PageType = PageType.Resume;
const aboutPage: PageType = PageType.About;
const notFoundPage: PageType = PageType.NotFound;

export const pageTypes = {
  home: homePage,
  resume: resumePage,
  about: aboutPage,
  notFound: notFoundPage,
};
