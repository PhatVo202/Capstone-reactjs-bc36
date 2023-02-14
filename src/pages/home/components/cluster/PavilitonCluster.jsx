import React, { useEffect, useState } from "react";
import { fetchInforClusterApi } from "services/inforcluster";
import { fetchSystemClusterApi } from "services/systemcluster";

export default function PavilitonCluster() {
  const [systemCluster, setSystemCluster] = useState([]);

  const [inforCluster, setInforCluster] = useState({});

  useEffect(() => {
    getSystemCluster();
    getInforCluster();
  }, []);

  const getSystemCluster = async () => {
    const result = await fetchSystemClusterApi();

    setSystemCluster(result.data.content);
  };

  const getInforCluster = async () => {
    const result = await fetchInforClusterApi();
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
                  <p style={{ color: "white" }}>{item.tenCumRap}</p>
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
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {renderTab()}
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            {/* {renderInforCluster()} */}
          </div>
        </div>
      </div>
    </div>
  );
}
