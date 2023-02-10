import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setUserInfoAction } from "../../store/actions/userAction";

import "./styleheader.css";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Button } from "antd";

export default function Header() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("USER_INFO_KEY");
    dispatch(setUserInfoAction(null));
    navigate("/");
  };

  return (
    <div className="header__content">
      <div className="container">
        <nav className="navbar navbar-expand-sm navbar-light ml-auto">
          <Link className="navbar-brand" to="/">
            <img
              src="http://logovina.com/wp-content/uploads/2017/01/logo-cong-ty-truyen-hinh-warner-bros.jpg"
              width={200}
              height={60}
            />
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
            <div>
              {userState.userInfo ? (
                <>
                  <span className="mr-3">
                    <Space size={16} wrap>
                      <Avatar icon={<UserOutlined />} />
                    </Space>
                    {userState.userInfo.hoTen}
                  </span>
                  <Space wrap>
                    <Button size="large" danger onClick={handleLogout}>
                      Đăng xuất
                    </Button>
                  </Space>
                </>
              ) : (
                <>
                  <Space wrap>
                    <Button
                      size="large"
                      className="btn__register"
                      danger
                      type="text"
                    >
                      Đăng ký
                    </Button>
                  </Space>
                  <Space wrap>
                    <Button
                      size="large"
                      danger
                      onClick={() => navigate("/login")}
                    >
                      Đăng nhập
                    </Button>
                  </Space>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
