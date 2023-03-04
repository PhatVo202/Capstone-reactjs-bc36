import React from "react";

export default function UserForm() {
  return (
    <div>
      <h1>Them nguoi dung</h1>
      <form action="" className="container-xl">
        <div className="row">
          <div className="col-6">
            <div className="form-group w-100">
              <label> Tai khoan</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group w-100">
              <label> So dien thoai</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group w-100">
              <label>Mat khau</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group w-100">
              <label>Ho ten</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group w-100">
              <label>Email</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group w-100">
              <label>Ma loai nguoi dung</label>
              <select id="inputState" class="form-control">
                <option selected>Khachhang</option>
                <option>Quantri</option>
              </select>
            </div>
          </div>
          <div>
            <button className="btn btn-success">Them</button>
          </div>
        </div>
      </form>
    </div>
  );
}
