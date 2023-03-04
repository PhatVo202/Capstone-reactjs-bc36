import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieShowtimesApi } from "../../../../services/cinema";
import moment from "moment";
import { formatDate, formatTime } from "../../../../utils";

import { Tabs, Space, Tag } from "antd";

const { TabPane } = Tabs;

export default function Showtimes() {
 //lấy params trên url
  const params = useParams();

  const [movieShowtimes, setMovieShowtimes] = useState({});
  

  useEffect(() => {
    getMovieShowtimes();
  }, []);

  const getMovieShowtimes = async () => {
    const result = await fetchMovieShowtimesApi(params.id);
    console.log(result);
    setMovieShowtimes(result.data.content);
  };

  const renderTabs = () => {
    return movieShowtimes?.heThongRapChieu?.map((item, index) => {
      return (
        <TabPane
          tab={
            <>
              <img src={item.logo} width={50} height={50} className="mr-3" />
              <span>{item.tenHeThongRap}</span>
            </>
          }
          key={index}
        >
          <div>
            {item.cumRapChieu?.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="d-flex align-items-center justify-content-start mb-3"
                    style={{ verticalAlign: "center" }}
                  >
                    <img src={item.hinhAnh} alt="" width={50} height={50} />
                    <div className="ml-2">
                      <p style={{ marginBottom: 0 }}>{item.tenCumRap}</p>
                      <p style={{ marginBottom: 0 }}>{item.diaChi}</p>
                    </div>
                  </div>
                  <div>
                    {item.lichChieuPhim?.map((item) => {
                      return (
                        <Space>
                          <Tag color="gold">
                            <Link
                              style={{ textDecoration: "none" }}
                              to={`/booking/${item.maLichChieu}`}
                            >
                              {formatTime(item.ngayChieuGioChieu)}
                            </Link>
                          </Tag>
                        </Space>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </TabPane>
      );
    });
  };

  return (
    <div className="mt-4 col-12 glass__content">
      <div className="container">
        <Tabs className="text-white">
          <TabPane tab="Lịch chiếu" key={1}>
            <Tabs tabPosition="left" className="text-white">
              {renderTabs()}
            </Tabs>
          </TabPane>
          <TabPane tab="Thông tin" key={2}>
            <div className="container">
              <p>
                <span className="text-warning">Ngày công chiếu: </span>
                {formatDate(movieShowtimes.ngayKhoiChieu)}
              </p>
              <p>
                <span className="text-warning"> Định dạng: </span> 2D/Digital
              </p>
            </div>
          </TabPane>
          <TabPane tab="Đánh giá" key={3}></TabPane>
        </Tabs>
      </div>
    </div>
  );
}
