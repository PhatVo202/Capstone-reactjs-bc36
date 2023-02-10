import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../services/user";
import { setUserInfoAction } from "../../store/actions/userAction";

import "./stylelogin.css";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await loginApi(state);

    localStorage.setItem("USER_INFO_KEY", JSON.stringify(result.data.content));
    dispatch(setUserInfoAction(result.data.content));
    navigate("/");
    console.log(result.data.content);
  };

  return (
    <div className="bg__login">
      {/* <div className="w-25 mx-auto py-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Username</label>
            <input
              type="text"
              className="form-control"
              name="taiKhoan"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              type="text"
              className="form-control"
              name="matKhau"
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary">LOGIN</button>
        </form>
      </div> */}

      <div className="center">
        <h1>Login</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              type="text"
              required
              onChange={handleChange}
              name="taiKhoan"
            />
            <span />
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              required
              name="matKhau"
              onChange={handleChange}
            />
            <span />
            <label>Password</label>
          </div>
          <div className="pass">Forgot Password?</div>
          <input type="submit" defaultValue="Login" />
          <div className="signup_link">
            Not a member? <a href="#">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
}
