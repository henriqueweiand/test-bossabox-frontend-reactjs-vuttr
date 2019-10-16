import { all, takeLatest } from 'redux-saga/effects';

import { Types as ToolsTypes } from '../ducks/tools';

import {
  getAllRequest, getByTagRequest, addToolRequest, removeToolRequest,
} from './tools';

export default function* rootSaga() {
  yield all([
    takeLatest(ToolsTypes.GET_ALL_REQUEST, getAllRequest),
    takeLatest(ToolsTypes.GET_BY_TAG_REQUEST, getByTagRequest),
    takeLatest(ToolsTypes.ADD_TOOL_REQUEST, addToolRequest),
    takeLatest(ToolsTypes.REMOVE_TOOL_REQUEST, removeToolRequest),
  ]);
}
