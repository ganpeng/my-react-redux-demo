'use strict'

import { takeEvery } from 'redux-saga'
import { call, put, fork } from 'redux-saga/effects'
import { REQUEST_USER_DATA, REQUEST_USER_DATA_SUCCESS, REQUEST_USER_DATA_FAILURE } from '../constants'
import axios from 'axios'

function getUsers() {
  return  axios.get('/users') 
}



export function* fetchUsers(action) {

  try {
    const { data } =  yield call(getUsers)
    yield put({type : REQUEST_USER_DATA_SUCCESS, users : data})

  } catch (e) {
    yield put({type : REQUEST_USER_DATA_FAILURE, error : 'wrong!!!'})
  }

}



export default function* rootSaga() {
  yield takeEvery(REQUEST_USER_DATA, fetchUsers)
}