export enum PageType {
  Home = '/',
  Resume = '/resume',
  About = '/about',
  NotFound = '/undefined',
}

const homePage: PageType = PageType.Home;
const resumePage: PageType = PageType.Resume;
const aboutPage: PageType = PageType.About;
const notFoundPage: PageType = PageType.NotFound;

// export const PageTypes = {
// 	home: PageType.Home,
// 	resume: PageType.Resume,
// 	about: PageType.About,
// 	notFound: PageType.NotFound,
// };

export const pageTypes = {
  home: homePage,
  resume: resumePage,
  about: aboutPage,
  notFound: notFoundPage,
};
