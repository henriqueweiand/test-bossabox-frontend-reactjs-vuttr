import { runSaga } from 'redux-saga';
import api from '../../services/api';
import MockAdapter from 'axios-mock-adapter';

import {
  getAllRequest,
  getByTagRequest,
  addToolRequest,
  removeToolRequest,
} from '../../store/sagas/tools';
import { Creators as ToolsActions } from '../../store/ducks/tools';

const getAllResponseData = [
  {
    id: 1,
    title: 'Notion',
    link: 'https://notion.so',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
    tags: ['organization', 'planning', 'collaboration', 'writing', 'calendar'],
  },
  {
    id: 2,
    title: 'json-server',
    link: 'https://github.com/typicode/json-server',
    description:
      'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
    tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
  },
  {
    id: 3,
    title: 'fastify',
    link: 'https://www.fastify.io/',
    description:
      'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
    tags: ['web', 'framework', 'node', 'http2', 'https', 'localhost'],
  },
];
const getByTagResponseData = [
  {
    id: 2,
    title: 'json-server',
    link: 'https://github.com/typicode/json-server',
    description:
      'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
    tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
  },
];
const addToolResponseData = {
  id: 4,
  title: 'facebook/react',
  link: 'https://github.com/facebook/react',
  description:
    'A declarative, efficient, and flexible JavaScript library for building user interfaces. https://reactjs.org',
  tags: ['facebook', 'react'],
};

const apiMock = new MockAdapter(api);

describe('Tools Sagas', () => {
  it('should be able to get all tools', async () => {
    const dispatched = [];

    apiMock.onGet('/tools').reply(200, getAllResponseData);

    const actionParam = {
      payload: {
        search: '',
      },
    };

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      getAllRequest,
      actionParam,
    ).toPromise();

    expect(dispatched).toContainEqual(ToolsActions.getAllSuccess(getAllResponseData));
  });

  it('should be able to get tools by tag', async () => {
    const dispatched = [];

    apiMock.onGet('/tools?tags_like=json').reply(200, getByTagResponseData);

    const actionParam = {
      payload: {
        search: 'json',
      },
    };

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      getByTagRequest,
      actionParam,
    ).toPromise();

    expect(dispatched).toContainEqual(ToolsActions.getAllSuccess(getByTagResponseData));
  });

  it('should be able to add new tool', async () => {
    const dispatched = [];

    apiMock.onPost('/tools').reply(201, addToolResponseData);

    const actionParam = {
      payload: {
        tool: {
          title: 'facebook/react',
          link: 'https://github.com/facebook/react',
          description:
            'A declarative, efficient, and flexible JavaScript library for building user interfaces. https://reactjs.org',
          tags: ['facebook', 'react'],
        },
      },
    };

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      addToolRequest,
      actionParam,
    ).toPromise();

    expect(dispatched).toContainEqual(ToolsActions.addToolSuccess(addToolResponseData));
  });

  it('should be able to remove tools', async () => {
    const dispatched = [];

    apiMock.onDelete('/tools/4').reply(200);

    const actionParam = {
      payload: {
        id: 4,
      },
    };

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      removeToolRequest,
      actionParam,
    ).toPromise();

    expect(dispatched).toContainEqual(ToolsActions.removeToolSuccess());
  });
});
