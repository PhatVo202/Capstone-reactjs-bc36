import React, { useContext, useEffect, useState } from "react";
import { Space, Tag, Table } from "antd";
import { getUserListApi } from "services/user";
import { LoadingContext } from "contexts/loading/LoadingContext";

export default function UserList() {
  const [_, setLoadingState] = useContext(LoadingContext);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    setLoadingState({ isLoading: true });
    const result = await getUserListApi();
    console.log(result);
    setUserList(result);
    setLoadingState({ isLoading: false });
  };

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "1",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      key: "2",
    },
    {
      title: "Loại người dùng",
      key: "3",
      dataIndex: "maLoaiNguoiDung",
    },
    {
      title: "Email",
      key: "4",
      dataIndex: "email",
    },
    {
      title: "Họ tên",
      key: "5",
      dataIndex: "hoTen",
    },
    {
      title: "Sdt",
      key: "6",
      dataIndex: "soDT",
    },
    {
      title: "Thao tác",
      key: "7",
    },
  ];

  return (
    <div>
      <Space>
        <Tag color="#2db7f5">
          <h4>Danh sách User</h4>
        </Tag>
      </Space>
      <div>
        <Table columns={columns} dataSource="" />
      </div>
    </div>
  );
}
