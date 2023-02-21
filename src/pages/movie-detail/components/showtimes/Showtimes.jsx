import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieShowtimesApi } from "../../../../services/cinema";
import moment from "moment";
import { formatDate, formatTime } from "../../../../utils";

import { Tabs } from "antd";

const { TabPane } = Tabs;

export default function Showtimes() {
  const [movieShowtimes, setMovieShowtimes] = useState({});
  const params = useParams();

  useEffect(() => {
    getMovieShowtimes();
  }, []);

  const getMovieShowtimes = async () => {
    const result = await fetchMovieShowtimesApi(params.id);

    setMovieShowtimes(result.data.content);
  };

  // const renderTabs = () => {
  //   return movieShowtimes?.heThongRapChieu?.map((ele, idx) => {
  //     return (
  //       <a
  //         key={ele.maHeThongRap}
  //         className={`nav-link text-capitalize ${idx === 0 && "active"}`}
  //         data-toggle="pill"
  //         href={`#${ele.maHeThongRap}`}
  //         role="tab"
  //         aria-selected="true"
  //       >
  //         {ele.tenHeThongRap}
  //       </a>
  //     );
  //   });
  // };

  const renderTabContents = () => {
    return movieShowtimes?.heThongRapChieu?.map((ele, idx) => {
      return (
        <div
          key={ele.maHeThongRap}
          className={`tab-pane fade show ${idx === 0 && "active"}`}
          id={ele.maHeThongRap}
          role="tabpanel"
        >
          {ele?.cumRapChieu?.map((ele) => {
            return (
              <div key={ele.maCumRap} className="row mb-5">
                <div className="col-1">
                  <img className="img-fluid rounded" src={ele.hinhAnh} />
                </div>
                <div className="col-11 pl-0">
                  <h5>{ele.tenCumRap}</h5>
                  <span className="text-muted">{ele.diaChi}</span>
                </div>
                <div className="col-12">
                  <div className="row">
                    {ele?.lichChieuPhim?.map((ele) => {
                      return (
                        <div className="col-3" key={ele.maLichChieu}>
                          <Link to={`/booking/${ele.maLichChieu}`}>
                            {formatDate(ele.ngayChieuGioChieu)}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    });
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
          {/* <Tabs tabPosition="top">
            {item?.cumRapChieu?.map((item, index) => {
              return (
                <TabPane
                  tab={
                    <>
                      <img src={item.hinhAnh} alt="" width={50} height={50} />
                      <p>{item.diaChi}</p>
                    </>
                  }
                  key={index}
                >
                  {item?.lichChieuPhim?.map((item) => {
                    return (
                      <Link to={`/booking/${item.maLichChieu}`}>
                        {item.ngayChieuGioChieu}
                      </Link>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs> */}
          <div>
            {item.cumRapChieu?.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <img src={item.hinhAnh} alt="" width={50} height={50} />
                    <span>{item.tenCumRap}</span>
                    <p>{item.diaChi}</p>
                  </div>
                  <div>
                    {item.lichChieuPhim?.map((item) => {
                      return (
                        <Link to={`/booking/${item.maLichChieu}`}>
                          {formatTime(item.ngayChieuGioChieu)}
                        </Link>
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
    // <div className="col-12 mt-5">
    //   <div className="row">
    //     <div className="col-3">
    //       <div
    //         className="nav flex-column nav-pills"
    //         id="v-pills-tab"
    //         role="tablist"
    //         aria-orientation="vertical"
    //       >
    //         {renderTabs()}
    //       </div>
    //     </div>
    //     <div className="col-9">
    //       <div className="tab-content" id="v-pills-tabContent">
    //         {renderTabContents()}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="mt-4">
      <Tabs tabPosition="left">{renderTabs()}</Tabs>
    </div>
  );
}
