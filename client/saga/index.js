'use strict'

import { takeEvery, takeLatest, delay } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { INCREMENT, DECREMENT } from '../constants'


export function* incrementAsync(action) {
  yield call(delay, 3000)
  yield put({type: INCREMENT, number : action.number})
}

export default function* rootSaga() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}
