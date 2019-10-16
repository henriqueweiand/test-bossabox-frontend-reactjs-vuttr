import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as ToolsActions } from '~/store/ducks/tools';

export function* getAllRequest(action) {
  try {
    const { payload } = action;
    const { search } = payload;

    let response = null;
    if (typeof search !== 'undefined' && search !== null && search !== '') {
      response = yield call(api.get, `/tools?q=${search}`);
    } else {
      response = yield call(api.get, '/tools');
    }

    if (response !== null && response.status === 200) {
      yield put(ToolsActions.getAllSuccess(response.data));
    } else {
      yield put(ToolsActions.getAllError('There was an error trying to get the tools.'));
    }
  } catch (error) {
    yield put(ToolsActions.getAllError('There was an error trying to get the tools.'));
  }
}

export function* getByTagRequest(action) {
  try {
    const { payload } = action;
    const { search } = payload;

    const response = yield call(api.get, `/tools?tags_like=${search}`);

    if (response !== null && response.status === 200) {
      yield put(ToolsActions.getAllSuccess(response.data));
    } else {
      yield put(ToolsActions.getAllError('There was an error trying to get the tools by a tag.'));
    }
  } catch (error) {
    yield put(ToolsActions.getAllError('There was an error trying to get the tools by a tag.'));
  }
}

export function* addToolRequest(action) {
  try {
    const { payload } = action;
    const { tool } = payload;

    const response = yield call(api.post, '/tools', {
      title: tool.title,
      link: tool.link,
      description: tool.description,
      tags: tool.tags,
    });

    if (response !== null && response.status === 201) {
      yield put(ToolsActions.addToolSuccess(response.data));
    } else {
      yield put(ToolsActions.addToolError('There was an error trying to save the tool.'));
    }
  } catch (error) {
    yield put(ToolsActions.addToolError('There was an error trying to save the tool.'));
  }
}

export function* removeToolRequest(action) {
  try {
    const { payload } = action;
    const { id } = payload;

    const response = yield call(api.delete, `/tools/${id}`);

    if (response !== null && response.status === 200) {
      yield put(ToolsActions.removeToolSuccess());
    } else {
      yield put(ToolsActions.removeToolError('There was an error trying to delete the tool.'));
    }
  } catch (error) {
    yield put(ToolsActions.removeToolError('There was an error trying to delete the tool.'));
  }
}
