const DEFAULT_STATE = {
  dangChieu: true,
  sapChieu: true,
};

export const FilmManagementReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "":
      break;

    default:
      break;
  }

  return {
    ...state,
  };
};
