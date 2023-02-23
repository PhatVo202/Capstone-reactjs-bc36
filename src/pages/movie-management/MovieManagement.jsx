import React from "react";
import { useMovieList } from "../../hooks/useMovieList";

import { Button, Space, Table, Tag } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function MovieManagement() {
  const movieList = useMovieList();
  const navigate = useNavigate();

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      key: "1",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "2",
      render: (text) => <img src={text} alt="" width={50} height={50} />,
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "3",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "4",
    },
    {
      title: "Hành động",
      key: "5",
      render: (text) => {
        return (
          <div className="d-flex">
            <Button
              onClick={() => navigate(`/admin/flims/edit/:${text.maPhim}`)}
              size="small"
            >
              <Space>
                <EditOutlined />
              </Space>
            </Button>
            <Button size="small">
              <Space>
                <DeleteOutlined />
              </Space>
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Button
        onClick={() => navigate("/admin/flims/addnew")}
        type="primary"
        size="large"
        className="mb-5"
      >
        Thêm phim
      </Button>
      <Table columns={columns} dataSource={movieList} />
    </div>
  );
}
