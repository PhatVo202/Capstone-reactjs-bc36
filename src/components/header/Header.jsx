import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setUserInfoAction } from "../../store/actions/userAction";

import "./styleheader.css";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Button, Dropdown } from "antd";

export default function Header() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("USER_INFO_KEY");
    dispatch(setUserInfoAction(null));
    navigate("/");
  };

  const items = [
    {
      label: (
        <NavLink to="/profile" style={{ fontSize: "18px" }}>
          <UserOutlined />
          Profile
        </NavLink>
      ),
      key: "1",
    },
    {
      label: (
        <Button size="middle" danger onClick={handleLogout}>
          Đăng xuất
        </Button>
      ),
      key: "2",
    },
  ];

  return (
    <div className="header__content">
      <div className="container-xl bg-rg">
        <nav className="navbar navbar-expand-md navbar-light ml-auto">
          <Link className="navbar-brand" to="/">
            <img src="./img/logo.png" width={240} height={70} />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-auto">
              <li className="nav-item active">
                {/* <a className="nav-link" href="#">
                {" "}
                Home{" "}
              </a> */}
                <NavLink to="/"></NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/" className="nav-link">
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/" className="nav-link">
                  Lịch chiếu
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/" className="nav-link">
                  Cụm rạp
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/" className="nav-link">
                  Tin tức
                </NavLink>
              </li>
            </ul>
            <div className="mr-4">
              {userState.userInfo ? (
                <Fragment className="container">
                  <div className="row" style={{ textAlign: "center" }}>
                    <span className=" text-white ">
                      <Dropdown
                        menu={{
                          items,
                        }}
                        trigger={["click"]}
                        placement="bottomRight"
                        arrow
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          <Space size={16} wrap>
                            <Avatar
                              style={{ backgroundColor: "#87d068" }}
                              icon={<UserOutlined />}
                            />
                            {userState.userInfo.hoTen}
                          </Space>
                        </a>
                      </Dropdown>
                    </span>
                  </div>
                </Fragment>
              ) : (
                <Fragment className="container">
                  <div className="row">
                    <Space
                      className="col-sm-12 col-md-6 col-xl-6"
                      wrap
                      style={{ justifyContent: "center" }}
                    >
                      <Button
                        size="middle"
                        className="btn__register"
                        danger
                        type="text"
                        onClick={() => navigate("/register")}
                      >
                        Đăng ký
                      </Button>
                    </Space>
                    <Space
                      className="col-sm-12 col-md-6 col-xl-6"
                      wrap
                      style={{ justifyContent: "center" }}
                    >
                      <Button
                        size="middle"
                        danger
                        onClick={() => navigate("/login")}
                      >
                        Đăng nhập
                      </Button>
                    </Space>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
