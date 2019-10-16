import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import NewToolModal from '../../components/NewToolModal';
import { Creators as ToolsActions } from '../../store/ducks/tools';

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

describe('NewToolModal Component', () => {
  beforeEach(() => {
    // creates the store with any initial state or middleware needed
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <NewToolModal show handleCloseModal={() => {}} />
      </Provider>,
    );
  });

  it('should render elements', () => {
    expect(wrapper.find('form#newToolForm').exists()).toBe(true);
    expect(wrapper.find("form#newToolForm input[name='tool-title']").exists()).toBe(true);
    expect(wrapper.find("form#newToolForm input[name='tool-link']").exists()).toBe(true);
    expect(wrapper.find("form#newToolForm textarea[name='tool-description']").exists()).toBe(true);
    expect(wrapper.find("form#newToolForm input[name='tool-tags']").exists()).toBe(true);
    expect(wrapper.find('button#newToolButton').exists()).toBe(true);
  });

  it('should be able to add new tool', () => {
    wrapper.find('NewToolModal').setState({
      validated: true,
      tool: {
        title: 'facebook/react',
        link: 'https://github.com/facebook/react',
        description:
          'A declarative, efficient, and flexible JavaScript library for building user interfaces. https://reactjs.org',
        tags: 'facebook react',
      },
    });

    wrapper.find('form#newToolForm').simulate('submit');
    // console.log(wrapper.find('NewToolModal').state().tool);
    // console.log(store.getActions());

    expect(store.getActions()).toContainEqual(
      ToolsActions.addToolRequest({
        title: 'facebook/react',
        link: 'https://github.com/facebook/react',
        description:
          'A declarative, efficient, and flexible JavaScript library for building user interfaces. https://reactjs.org',
        tags: ['facebook', 'react'],
      }),
    );
  });
});
