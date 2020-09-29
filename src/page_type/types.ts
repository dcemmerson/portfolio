import { PageType } from './PageTypes';

export type SelectedPageType = /*keyof typeof */ PageType;

export interface PageState {
  selected: SelectedPageType;
}
