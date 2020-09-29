import { PageTypeContext } from './PageTypeProvider';
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
    default:
      return PageType.Resume;
  }
}
