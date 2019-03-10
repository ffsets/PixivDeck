import {
  LOGIN_REQUEST_TYPE,
  LOGIN_SUCCESS_TYPE,
  LOGIN_FAILURE_TYPE,
  START_LOADING_TYPE,
  END_LOADING_TYPE,
  AUTO_LOGIN_REQUEST_TYPE,
  AUTO_LOGIN_SUCCESS_TYPE,
  AUTO_LOGIN_FAILURE_TYPE,
  LOGOUT_TYPE,
  SET_AUTH_TYPE,
  CLEAR_ERROR_TYPE,
  SET_ACCOUNT_TYPE,
  SET_REFRESH_TOKEN_TYPE,
} from './actionTypes'

export const LOGIN_REQUEST: LOGIN_REQUEST_TYPE = 'LoginModal/LOGIN_REQUEST'
export const LOGIN_SUCCESS: LOGIN_SUCCESS_TYPE = 'LoginModal/LOGIN_SUCCESS'
export const LOGIN_FAILURE: LOGIN_FAILURE_TYPE = 'LoginModal/LOGIN_FAILURE'
export const START_LOADING: START_LOADING_TYPE = 'LoginModal/START_LOADING'
export const END_LOADING: END_LOADING_TYPE = 'LoginModal/END_LOADING'
export const AUTO_LOGIN_REQUEST: AUTO_LOGIN_REQUEST_TYPE =
  'LoginModal/AUTO_LOGIN_REQUEST'
export const AUTO_LOGIN_SUCCESS: AUTO_LOGIN_SUCCESS_TYPE =
  'LoginModal/AUTO_LOGIN_SUCCESS'
export const AUTO_LOGIN_FAILURE: AUTO_LOGIN_FAILURE_TYPE =
  'LoginModal/AUTO_LOGIN_FAILURE'
export const LOGOUT: LOGOUT_TYPE = 'LoginModal/LOGOUT'
export const SET_AUTH: SET_AUTH_TYPE = 'LoginModal/SET_AUTH'
export const CLEAR_ERROR: CLEAR_ERROR_TYPE = 'LoginModal/CLEAR_ERROR'
export const SET_ACCOUNT: SET_ACCOUNT_TYPE = 'LoginModal/SET_ACCOUNT'
export const SET_REFRESH_TOKEN: SET_REFRESH_TOKEN_TYPE =
  'LoginModal/SET_REFRESH_TOKEN'