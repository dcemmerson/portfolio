import { PageType } from './PageTypes';
import { SelectedPageType } from './types';

export function getSelectedPageFromWindow(): SelectedPageType {
  switch (window.location.pathname.toLowerCase()) {
    case PageType.Home:
      return PageType.Home;
    case PageType.About:
      return PageType.About;
    case PageType.Resume:
      return PageType.Resume;
    case PageType.Projects:
      return PageType.Projects;
    case PageType.MyTie:
      return PageType.MyTie;
    default:
      return PageType.NotFound;
  }
}
