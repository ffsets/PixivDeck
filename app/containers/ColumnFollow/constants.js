// @flow
import type {
  ADD_FOLLOW_COLUMN_TYPE,
  ADD_FOLLOW_COLUMN_SUCCESS_TYPE,
  SET_NEXT_URL_TYPE,
  FETCH_FOLLOW_TYPE,
  FETCH_FOLLOW_SUCCESS_TYPE,
  FETCH_FOLLOW_FAILRE_TYPE,
  FETCH_NEXT_FOLLOW_TYPE,
  FETCH_NEXT_FOLLOW_SUCCESS_TYPE,
  FETCH_NEXT_FOLLOW_FAILRE_TYPE,
} from './actionTypes.js'

export const ADD_FOLLOW_COLUMN: ADD_FOLLOW_COLUMN_TYPE =
  'ColumnFollow/ADD_COLUMN'
export const ADD_FOLLOW_COLUMN_SUCCESS: ADD_FOLLOW_COLUMN_SUCCESS_TYPE =
  'ColumnFollow/ADD_COLUMN_SUCCESS'
export const SET_NEXT_URL: SET_NEXT_URL_TYPE = 'ColumnFollow/SET_NEXT_URL'
export const FETCH_FOLLOW: FETCH_FOLLOW_TYPE = 'ColumnFollow/FETCH_FOLLOW'
export const FETCH_FOLLOW_SUCCESS: FETCH_FOLLOW_SUCCESS_TYPE =
  'ColumnFollow/FETCH_FOLLOW_SUCCESS'
export const FETCH_FOLLOW_FAILRE: FETCH_FOLLOW_FAILRE_TYPE =
  'ColumnFollow/FETCH_FOLLOW_FAILRE'
export const FETCH_NEXT_FOLLOW: FETCH_NEXT_FOLLOW_TYPE =
  'ColumnFollow/FETCH_NEXT_FOLLOW'
export const FETCH_NEXT_FOLLOW_SUCCESS: FETCH_NEXT_FOLLOW_SUCCESS_TYPE =
  'ColumnFollow/FETCH_NEXT_FOLLOW_SUCCESS'
export const FETCH_NEXT_FOLLOW_FAILRE: FETCH_NEXT_FOLLOW_FAILRE_TYPE =
  'ColumnFollow/FETCH_NEXT_FOLLOW_FAILRE'