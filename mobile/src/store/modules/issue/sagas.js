import { Alert } from 'react-native';
import { takeLatest, put, call, all } from 'redux-saga/effects';

import api from '~/services/api';

import { reportIssueSuccess, reportIssueFailure } from './actions';

export function* reportIssue({ payload }) {
  try {
    const { id, description } = payload.data;
    console.tron.log('saga-issue ', id, description)
    const issue = Object.assign({
      description,
    });

    const response = yield call(api.post, `delivery/${id}/problems`, issue);

    Alert.alert('Success!', 'problem created!');

    yield put(reportIssueSuccess(response.data));
  } catch (err) {
    Alert.alert('Report Problem', 'Error saving problem, try again later!', err);
    yield put(reportIssueFailure());
  }
}

export default all([takeLatest('@issue/REPORT_ISSUE_REQUEST', reportIssue)]);
