import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Main from '~/pages/Main';

const initialState = {
  tools: {
    data: [
      {
        id: 2,
        title: 'json-server',
        link: 'https://github.com/typicode/json-server',
        description:
          'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
        tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
      },
    ],
    loading: false,
    error: null,
    successOnAdd: false,
    errorOnAdd: null,
    successOnRemove: false,
    errorOnRemove: null,
  },
};

const mockStore = configureStore();

let wrapper;
let store;

describe('Main Component', () => {
  beforeEach(() => {
    // creates the store with any initial state or middleware needed
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Main />
      </Provider>,
    );
  });

  it('should render main form', () => {
    expect(wrapper.find('input#input-search').exists()).toBe(true);
    expect(wrapper.find('div.header').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('div.news').exists()).toBe(true);
  });

  it("should render the tools' list", () => {
    expect(wrapper.find('.news section').length).toBe(1);
  });
});
