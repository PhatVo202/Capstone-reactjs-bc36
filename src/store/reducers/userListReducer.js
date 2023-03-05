import { SET_USER_LIST_TYPE } from "store/types/userListType";

const DEFAULT_STATE = {
  userList: {},
};

export const userListReducer = (state = DEFAULT_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_USER_LIST_TYPE: {
      state.userList = payload;
      break;
    }

    default:
      break;
  }
  return { ...state };
};
