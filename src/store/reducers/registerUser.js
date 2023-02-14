const DEFAULT_STATE = {
  taiKhoan: "",
  matKhau: "",
  maNhom: "",
  hoTen: "",
  email: "",
  soDt: "",
};

export const registerUserReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "":
      break;

    default:
      break;
  }
  return { ...state };
};
