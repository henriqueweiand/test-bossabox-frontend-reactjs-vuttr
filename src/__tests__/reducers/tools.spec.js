import toolsReducer, { Creators as ToolsActions } from '~/store/ducks/tools';

describe('Tools Reducer', () => {
  it('should be able to add tools', () => {
    const newTool = {
      id: 1,
      title: 'facebook/react',
      link: 'https://github.com/facebook/react',
      description:
        'A declarative, efficient, and flexible JavaScript library for building user interfaces. https://reactjs.org',
      tags: ['facebook', 'react'],
    };

    const state = toolsReducer({ data: [] }, ToolsActions.addToolSuccess(newTool));
    expect(state.data[0]).toBe(newTool);
  });

  it('should be able to remove tools', () => {
    const state = toolsReducer({}, ToolsActions.removeToolSuccess());
    expect(state.successOnRemove).toBe(true);
  });
});
