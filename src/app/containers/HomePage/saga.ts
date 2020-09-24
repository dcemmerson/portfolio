import { takeLatest, call, put, select } from 'redux-saga/effects';
import { actions } from './slice';

export default function* homepageSaga() {
  yield [
    // takeLatest(actions.changeUsername.type, getSomething),
  ];
}
