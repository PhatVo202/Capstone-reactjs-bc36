import React, { useEffect, useState } from "react";
import { Space, Tag, Button, Table } from "antd";
import { MA_NHOM } from "constants";
import { inforTkApi } from "services/user";

export default function Profile() {
  const [stateInfoTk, setStateInfoTk] = useState([]);
  const [stateValues, setStateValues] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: MA_NHOM,
    maLoaiNguoiDung: stateInfoTk.maLoaiNguoiDung,
    hoTen: "",
  });

  useEffect(() => {
    getInforTk();
  }, []);

  const getInforTk = async () => {
    const result = await inforTkApi();
    console.log(result);
    setStateInfoTk(result.data.content);
  };

  const columns = [
    // {
    //   title: "STT",
    //   dataIndex: "thongTinDatVe.length",
    //   key: "1",
    //   render: (text) => <a>{text}</a>,
    // },
    {
      title: "Tên phim",
      dataIndex: "thongTinDatVe.danhSachGhe.tenPhim",
      key: "1",
    },
    {
      title: "Thời lượng phim",
      dataIndex: "thongTinDatVe.thoiLuongPhim",
      key: "2",
    },
    {
      title: "Tên rạp",
      key: "3",
      dataIndex: "thongTinDatVe.danhSachGhe.maCumRap",
    },
    {
      title: "Ngày đặt",
      key: "4",
      dataIndex: "thongTinDatVe.ngayDat",
    },
    {
      title: "Mã vé",
      key: "5",
      dataIndex: "thongTinDatVe.maVe",
    },
    {
      title: "Tên ghế",
      key: "6",
      dataIndex: "thongTinDatVe.danhSachGhe.tenGhe",
    },
    {
      title: "Giá vé",
      key: "7",
      dataIndex: "thongTinDatVe.giaVe",
    },
    {
      title: "Tổng tiền",
      key: "8",
    },
  ];

  // const data = loading
  //   ? "Loading..."
  //   : stateInfoTk.map((item, index) => ({
  //       key: index,
  //       tenPhim: item.thongTinDatVe.danhSachGhe.tenPhim,
  //       thoiLuongPhim: thongTinDatVe.thoiLuongPhim,
  //       tenRap: thongTinDatVe.danhSachGhe.maCumRap,
  //       ngayDat: thongTinDatVe.ngayDat,
  //       maVe: thongTinDatVe.maVe,
  //       tenGhe: thongTinDatVe.danhSachGhe.tenGhe,
  //       giaVe: thongTinDatVe.giaVe,
  //     }));
  return (
    <>
      <div className="container-xl my-5" style={{ overflowX: "hidden" }}>
        <div className="row">
          <div className="col-3 text-center">
            <img
              className="pt-5"
              src="./img/bgAuth.jpg"
              alt=""
              width={200}
              height={200}
            />
            <p className="mt-3">{stateInfoTk.hoTen}</p>
            <p className="text-primary">{stateInfoTk.maLoaiNguoiDung}</p>
            <div className="mt-5">
              <p>Số lần đặt vé:</p>
              <p>Số vé đã đặt:</p>
            </div>
          </div>
          <div className="col-9 ">
            <div>
              <Space className="mt-5">
                <Tag color="#108ee9">
                  <h3>Thông tin người dùng</h3>
                </Tag>
              </Space>

              <div className="form-group container mt-4">
                <div className="row">
                  <div className="col-6">
                    <label>Tài khoản:</label>
                    <input type="text" name id className="form-control w-100" />
                  </div>
                  <div className="col-6">
                    <label>Số điện thoại:</label>
                    <input type="text" name id className="form-control w-100" />
                  </div>
                  <div className="col-6">
                    <label>Mật khẩu:</label>
                    <input type="text" name id className="form-control w-100" />
                  </div>
                  <div className="col-6">
                    <label>Họ tên:</label>
                    <input type="text" name id className="form-control w-100" />
                  </div>
                  <div className="col-6">
                    <label>Email:</label>
                    <input type="text" name id className="form-control w-100" />
                  </div>
                  <div className="col-12 mt-4">
                    <Space wrap>
                      <Button>Cập nhật</Button>
                    </Space>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-primary">Lịch sử đặt vé</h4>
                <Table columns={columns} dataSource="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
