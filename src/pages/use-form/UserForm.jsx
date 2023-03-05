import { MA_NHOM } from "constants";
import React, { Fragment, useEffect, useState } from "react";
import { fetchListTypeUserApi } from "services/user";

export default function UserForm() {
  const [typeUser, setTypeUser] = useState([]);
  const [values, setValues] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: MA_NHOM,
    maLoaiNguoiDung: "",
    hoTen: "",
  });

  useEffect(() => {
    getListTypeUser();
  }, []);

  const getListTypeUser = async () => {
    const result = await fetchListTypeUserApi();
    setTypeUser(result.data.content);
  };

  const renderMaLoaiNguoiDung = () => {
    return typeUser.map((item, index) => {
      return <option key={index}>{item.maLoaiNguoiDung}</option>;
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (event) => {
    console.log(event.target);
  };

  return (
    <div>
      <h1>Thêm người dùng</h1>
      <form action="" className="container-xl">
        <div className="row">
          <div className="col-6">
            <div className="form-group w-100">
              <label>Tài khoản</label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleBlur(event)}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group w-100">
              <label>Số điện thoại</label>
              <input
                type="text"
                className="form-control"
                name="soDt"
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleBlur(event)}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group w-100">
              <label>Mật khẩu</label>
              <input
                type="text"
                className="form-control"
                name="matKhau"
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleBlur(event)}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group w-100">
              <label>Họ tên</label>
              <input
                type="text"
                className="form-control"
                name="hoTen"
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleBlur(event)}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group w-100">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleBlur(event)}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group w-100">
              <label>Mã loại người dùng</label>
              <select
                class="form-control"
                name="maLoaiNguoiDung"
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleBlur(event)}
              >
                {renderMaLoaiNguoiDung()}
              </select>
            </div>
          </div>
          <div className="col-12 text-right">
            <button className="btn btn-success mr-2">Thêm</button>
            <button className="btn btn-primary">Cập nhật</button>
          </div>
        </div>
      </form>
    </div>
  );
}
