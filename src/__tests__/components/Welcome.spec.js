import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Welcome from '../../pages/welcome';

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

describe('Welcome Component', () => {
  beforeEach(() => {
    // creates the store with any initial state or middleware needed
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Welcome />
      </Provider>,
    );
  });

  it('should render main form', () => {
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('input.form-control').exists()).toBe(true);
    expect(wrapper.find('input.form-check-input').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it("should render the tools' list", () => {
    expect(wrapper.find('.card').length).toBe(1);
  });
});
