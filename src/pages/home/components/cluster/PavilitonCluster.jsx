import React, { Fragment, useEffect, useState } from "react";
import { fetchInforClusterApi } from "services/inforcluster";
import { fetchSystemClusterApi } from "services/systemcluster";

import { Tabs, Select } from "antd";
import { formatDate } from "utils";

import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;
const { Option } = Select;

export default function PavilitonCluster() {
  const [systemCluster, setSystemCluster] = useState([]);

  const [inforCluster, setInforCluster] = useState([]);

  useEffect(() => {
    getSystemCluster();
    getInforCluster();
  }, []);

  const getSystemCluster = async () => {
    const result = await fetchSystemClusterApi();

    setSystemCluster(result.data.content);
    // console.log(result);
  };

  const getInforCluster = async () => {
    const result = await fetchInforClusterApi(systemCluster.maHeThongRap);
    console.log(result);
    setInforCluster(result.data.content);
  };

  const renderTab = () => {
    return systemCluster?.map((item, index) => {
      return (
        <a
          key={index}
          className={`nav-link ${index === 0 && "active"}`}
          data-toggle="pill"
          href={`#${item.maHeThongRap}`}
          role="tab"
          aria-selected="true"
        >
          <img src={item.logo} alt="" width={60} height={60} />
        </a>
      );
    });
  };

  const renderInforCluster = () => {
    return inforCluster?.map((item, index) => {
      return (
        <div
          key={index}
          className={`tab-pane fade show ${index === 0 && "active"}`}
          id={item.maHeThongRap}
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
          {item?.lstCumRap?.map((item, index) => {
            return (
              <div key={index}>
                <div className="d-flex mb-3">
                  <img src={item.hinhAnh} alt="" width={50} height={50} />
                  <div>
                    <p style={{ color: "white" }}>{item.tenCumRap}</p>
                    <p className="text-white">{item.diaChi}</p>
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
    <div className="container">
      <div className="row">
        <Tabs className="bg-white col-12 " tabPosition={"left"}>
          {inforCluster?.map((item, index) => {
            return (
              <TabPane
                tab={
                  <div>
                    <img src={item.logo} alt="" width={50} height={50} />
                  </div>
                }
                key={index}
              >
                <Tabs tabPosition="left">
                  {item.lstCumRap?.map((item, index) => {
                    return (
                      <TabPane
                        tab={
                          <div>
                            <img
                              src={item.hinhAnh}
                              alt=""
                              width={50}
                              height={50}
                            />
                            <span style={{ fontSize: "14px" }}>
                              {item.tenCumRap}
                            </span>
                            <p style={{ fontSize: "12px" }}>{item.diaChi}</p>
                          </div>
                        }
                        key={index}
                      >
                        {item.danhSachPhim?.map((item, index) => {
                          return (
                            <Fragment key={index}>
                              <div className="my-5">
                                <div>
                                  <img
                                    src={item.hinhAnh}
                                    alt=""
                                    width={100}
                                    height={100}
                                  />
                                  <div>
                                    <h4>{item.tenPhim}</h4>
                                    <div>
                                      {item.lstLichChieuTheoPhim?.map(
                                        (item, index) => {
                                          return (
                                            <NavLink
                                              className="mr-2"
                                              to={`/booking/${item.maLichChieu}`}
                                              key={index}
                                            >
                                              {formatDate(
                                                item.ngayChieuGioChieu
                                              )}
                                            </NavLink>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Fragment>
                          );
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}
