import { Button } from "antd";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerApi } from "services/user";

import { Space, Alert } from "antd";

export default function Register() {
  const navigate = useNavigate();
  const ref = useRef();

  const [values, setValues] = useState({
    taiKhoan: "",
    matKhau: "",
    maNhom: "",
    hoTen: "",
    email: "",
    soDt: "",
  });

  const [errors, setErrors] = useState({
    taiKhoan: "",
    matKhau: "",
    maNhom: "",
    hoTen: "",
    email: "",
    soDt: "",
  });

  const handleBlur = (event) => {
    let message = "";

    const { validity, name, title, minLength, maxLength } = event.target;
    const { valueMissing, tooShort, tooLong, patternMismatch } = validity;

    if (valueMissing) {
      message = `${title} is required`;
    }

    if (tooShort || tooLong) {
      message = `${title} from ${minLength} - ${maxLength} `;
    }

    if (patternMismatch) {
      message = `${title} is invalid partern`;
    }

    setErrors({
      ...errors,
      [name]: message,
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = event.target.checkValidity();

    if (!isValid) {
      return;
    }

    const result = await registerApi(values);

    navigate("/login");
  };

  return (
    <div className="bg__login">
      <div className="center">
        <h1>Register</h1>
        <form method="post" onSubmit={(event) => handleSubmit(event)}>
          <div className="txt_field">
            <input
              type="text"
              required
              title="Tai Khoan"
              name="taiKhoan"
              onBlur={(event) => handleBlur(event)}
              onChange={(event) => handleChange(event)}
            />
            <span />
            <label>Tài khoản</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              required
              title="Mat Khau"
              name="matKhau"
              onBlur={(event) => handleBlur(event)}
              onChange={(event) => handleChange(event)}
            />
            <span />
            <label>Mật khẩu</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              required
              title="Password"
              name="maNhom"
              onBlur={(event) => handleBlur(event)}
              onChange={(event) => handleChange(event)}
            />
            <span />
            <label>Nhập lại mật khẩu</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              required
              title="Ho ten"
              name="hoTen"
              minLength={5}
              maxLength={20}
              onBlur={(event) => handleBlur(event)}
              onChange={(event) => handleChange(event)}
            />
            <span />
            <label>Họ tên</label>
          </div>

          <div className="txt_field">
            <input
              type="text"
              required
              title="Email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onBlur={(event) => handleBlur(event)}
              onChange={(event) => handleChange(event)}
            />
            <span />
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              required
              name="soDt"
              minLength={5}
              maxLength={10}
              title="SDT"
              onBlur={(event) => handleBlur(event)}
              onChange={(event) => handleChange(event)}
            />
            <span />
            <label>SDT</label>
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
