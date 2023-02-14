import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { fetchBannerCarouselListApi } from "services/carouselbanner";

import { PlayCircleTwoTone } from "@ant-design/icons";

const contentStyle = {
  width: "100%",
  height: "100vh",
  display: "block",
  objectFit: "cover",
};

export default function CarouselMovies() {
  const onChange = (currentSlide) => {};

  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    getBannerCarouselList();
  }, []);

  const getBannerCarouselList = async () => {
    const result = await fetchBannerCarouselListApi();

    setBannerList(result.data.content);
  };

  const renderBannerList = () => {
    return bannerList.map((item, index) => {
      return (
        <div key={index}>
          <div style={{ height: "100%" }}>
            <img
              // className="img-fluid"
              style={contentStyle}
              src={item.hinhAnh}
              className="img-fluid video-popup-image"
            />
          </div>
        </div>
      );
    });
  };

  return (
    <Carousel
      style={{ position: "relative", width: "100%", overflow: "hidden" }}
      afterChange={onChange}
      dotPosition="bottom"
      autoplay={true}
    >
      {renderBannerList()}
    </Carousel>
  );
}
