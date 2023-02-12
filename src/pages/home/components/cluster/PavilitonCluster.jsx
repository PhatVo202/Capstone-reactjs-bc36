import React, { useEffect, useState } from "react";
import { fetchSystemClusterApi } from "services/systemcluster";

export default function PavilitonCluster() {
  const [systemCluster, setSystemCluster] = useState([]);

  useEffect(() => {
    getSystemCluster();
  }, []);

  const getSystemCluster = async () => {
    const result = await fetchSystemClusterApi();

    setSystemCluster(result.data.content);
    console.log(result);
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
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
