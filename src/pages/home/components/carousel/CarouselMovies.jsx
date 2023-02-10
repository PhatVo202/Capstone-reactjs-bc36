import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { fetchBannerCarouselListApi } from "services/carouselbanner";

const contentStyle = {
  width: "100%",
  height: "600px",
  objectFit: "cover",
};

export default function CarouselMovies() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

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
          <div>
            <img style={contentStyle} src={item.hinhAnh} />
          </div>
        </div>
      );
    });
  };

  return (
    <Carousel afterChange={onChange} dotPosition="right" autoplay={true}>
      {renderBannerList()}
    </Carousel>
  );
}
