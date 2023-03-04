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

//render ra ngoài giao diện
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
    return movieShowtimes?.heThongRapChieu?.map((ele, idx) => {
      return (
        <a
          key={ele.maHeThongRap}
          className={`nav-link text-capitalize ${idx === 0 && "active"}`}
          data-toggle="pill"
          href={`#${ele.maHeThongRap}`} //href phải giống ID ở renderTabsContents
          role="tab"
          aria-selected="true"
        >
          {ele.tenHeThongRap}
        </a>
      );
    });
  };
  const renderTabContents = () => {
    return movieShowtimes?.heThongRapChieu?.map((ele, idx) => {
      return (
        <div
          key={ele.maHeThongRap}
          className={`tab-pane fade show ${idx === 0 && "active"}`}
          id={ele.maHeThongRap} // id phái giống HREF ở renderTabs
          role="tabpanel"
        >
          {/* render CỤM RẠP Chiếu */}
          {ele?.cumRapChieu?.map((ele) => {
            return (
              <div
              key={ele.maCumRap}
               className="row mb-5">
                <div className="col-1">
                  <img
                    className="img-fluid rounded"
                    src={ele.hinhAnh}
                  />
                </div>
                <div className="col-11 pl-0">
                  <h5>{ele.tenCumRap}</h5>
                  <span className="text-muted">
                    {ele.diaChi}
                  </span>
                </div>
                <div className="col-12">
                  <div className="row">

              {/* render lịch chiếu phim */}
                 {
                  ele?.lichChieuPhim?.map((ele) => {
                    return (
                      <div key={ele.maLichChieu} className="col-3">
                        <Link to={`/booking/${ele.maLichChieu}`}>{formatDate(ele.ngayChieuGioChieu)}</Link>
                      </div>
                    )
                  })
                 }
                   
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="col-12 mt-5">
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {renderTabs()}
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            {renderTabContents()}
          </div>
        </div>
      </div>
    </div>
  );
}
  //   return movieShowtimes?.heThongRapChieu?.map((item, index) => {
  //     return (
  //       <TabPane
  //         tab={
  //           <>
  //             <img src={item.logo} width={50} height={50} className="mr-3" />
  //             <span>{item.tenHeThongRap}</span>
  //           </>
  //         }
  //         key={index}
  //       >
  //         <div>
  //           {item.cumRapChieu?.map((item, index) => {
  //             return (
  //               <>
  //                 <div
  //                   key={index}
  //                   className="d-flex align-items-center justify-content-start mb-3"
  //                   style={{ verticalAlign: "center" }}
  //                 >
  //                   <img src={item.hinhAnh} alt="" width={50} height={50} />
  //                   <div className="ml-2">
  //                     <p style={{ marginBottom: 0 }}>{item.tenCumRap}</p>
  //                     <p style={{ marginBottom: 0 }}>{item.diaChi}</p>
  //                   </div>
  //                 </div>
  //                 <div>
  //                   {item.lichChieuPhim?.map((item) => {
  //                     return (
  //                       <Space>
  //                         <Tag color="gold">
  //                           <Link
  //                             style={{ textDecoration: "none" }}
  //                             to={`/booking/${item.maLichChieu}`}
  //                           >
  //                             {formatTime(item.ngayChieuGioChieu)}
  //                           </Link>
  //                         </Tag>
  //                       </Space>
  //                     );
  //                   })}
  //                 </div>
  //               </>
  //             );
  //           })}
  //         </div>
  //       </TabPane>
  //     );
  //   });
  // };

  // return (
  //   <div className="mt-4 col-12 glass__content">
  //     <div className="container">
  //       <Tabs className="text-white">
  //         <TabPane tab="Lịch chiếu" key={1}>
  //           <Tabs tabPosition="left" className="text-white">
  //             {renderTabs()}
  //           </Tabs>
  //         </TabPane>
  //         <TabPane tab="Thông tin" key={2}>
  //           <div className="container">
  //             <p>
  //               <span className="text-warning">Ngày công chiếu: </span>
  //               {formatDate(movieShowtimes.ngayKhoiChieu)}
  //             </p>
  //             <p>
  //               <span className="text-warning"> Định dạng: </span> 2D/Digital
  //             </p>
  //           </div>
  //         </TabPane>
  //         <TabPane tab="Đánh giá" key={3}></TabPane>
  //       </Tabs>
  //     </div>
  //   </div>
//   );
// }
