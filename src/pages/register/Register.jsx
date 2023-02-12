import { Button } from "antd";
import React from "react";

export default function Register() {
  return (
    <div className="bg__login">
      <div className="center">
        <h1>Register</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required name="taiKhoan" />
            <span />
            <label>Tài khoản</label>
          </div>
          <div className="txt_field">
            <input type="password" required name="matKhau" />
            <span />
            <label>Mật khẩu</label>
          </div>
          <div className="txt_field">
            <input type="password" required name="matKhau" />
            <span />
            <label>Nhập lại mật khẩu</label>
          </div>
          <div className="txt_field">
            <input type="text" required name="matKhau" />
            <span />
            <label>Họ tên</label>
          </div>
          <div className="txt_field">
            <input type="text" required name="matKhau" />
            <span />
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="text" required name="matKhau" />
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
