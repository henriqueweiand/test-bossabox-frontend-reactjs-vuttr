export const Types = {
  GET_ALL_REQUEST: 'tools/GET_ALL_REQUEST',
  GET_BY_TAG_REQUEST: 'tools/GET_BY_TAG_REQUEST',
  GET_ALL_SUCCESS: 'tools/GET_ALL_SUCCESS',
  GET_ALL_FAILURE: 'tools/GET_ALL_FAILURE',
  ADD_TOOL_REQUEST: 'tools/ADD_TOOL_REQUEST',
  ADD_TOOL_SUCCESS: 'tools/ADD_TOOL_SUCCESS',
  ADD_TOOL_FAILURE: 'tools/ADD_TOOL_FAILURE',
  REMOVE_TOOL_REQUEST: 'tools/REMOVE_TOOL_REQUEST',
  REMOVE_TOOL_SUCCESS: 'tools/REMOVE_TOOL_SUCCESS',
  REMOVE_TOOL_FAILURE: 'tools/REMOVE_TOOL_FAILURE',
  RESET_SUCCESS_VALUES_REQUEST: 'tools/RESET_SUCCESS_VALUES_REQUEST',
};

const initialState = {
  data: [],
  loading: false,
  error: null,
  successOnAdd: false,
  errorOnAdd: null,
  successOnRemove: false,
  errorOnRemove: null,
};

export default function tools(state = initialState, action) {
  switch (action.type) {
    case Types.GET_ALL_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case Types.GET_BY_TAG_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case Types.GET_ALL_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: '',
      };
    case Types.GET_ALL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case Types.ADD_TOOL_REQUEST:
      return {
        ...state,
        loading: true,
        successOnAdd: false,
        errorOnAdd: '',
      };
    case Types.ADD_TOOL_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.tool],
        loading: false,
        successOnAdd: true,
        errorOnAdd: '',
      };
    case Types.ADD_TOOL_FAILURE:
      return {
        ...state,
        loading: false,
        successOnAdd: false,
        errorOnAdd: action.payload.message,
      };
    case Types.REMOVE_TOOL_REQUEST:
      return {
        ...state,
        loading: true,
        successOnRemove: false,
        errorOnRemove: '',
      };
    case Types.REMOVE_TOOL_SUCCESS:
      return {
        ...state,
        loading: false,
        successOnRemove: true,
        errorOnRemove: '',
      };
    case Types.REMOVE_TOOL_FAILURE:
      return {
        ...state,
        loading: false,
        successOnRemove: false,
        errorOnRemove: action.payload.message,
      };
    case Types.RESET_SUCCESS_VALUES_REQUEST:
      return {
        ...state,
        loading: false,
        successOnAdd: false,
        successOnRemove: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  getAllRequest: search => ({
    type: Types.GET_ALL_REQUEST,
    payload: {
      search,
    },
  }),
  getByTagRequest: search => ({
    type: Types.GET_BY_TAG_REQUEST,
    payload: {
      search,
    },
  }),
  getAllSuccess: data => ({
    type: Types.GET_ALL_SUCCESS,
    payload: {
      data,
    },
  }),
  getAllError: message => ({
    type: Types.GET_ALL_FAILURE,
    payload: {
      message,
    },
  }),

  addToolRequest: tool => ({
    type: Types.ADD_TOOL_REQUEST,
    payload: {
      tool,
    },
  }),
  addToolSuccess: tool => ({
    type: Types.ADD_TOOL_SUCCESS,
    payload: {
      tool,
    },
  }),
  addToolError: message => ({
    type: Types.ADD_TOOL_FAILURE,
    payload: {
      message,
    },
  }),

  removeToolRequest: id => ({
    type: Types.REMOVE_TOOL_REQUEST,
    payload: {
      id,
    },
  }),
  removeToolSuccess: () => ({
    type: Types.REMOVE_TOOL_SUCCESS,
  }),
  removeToolError: message => ({
    type: Types.REMOVE_TOOL_FAILURE,
    payload: {
      message,
    },
  }),

  resetSuccessValuesRequest: () => ({
    type: Types.RESET_SUCCESS_VALUES_REQUEST,
  }),
};
