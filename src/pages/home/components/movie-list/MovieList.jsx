import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMovieListApi } from "../../../../services/movie";
import { Button } from "antd";
import { useMovieList } from "../../../../hooks/useMovieList";

import Slider from "react-slick";

export default function MovieList() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();
  const movieList = useMovieList();

  const renderMovieList = () => {
    return movieList.map((ele) => {
      return (
        <div
          key={ele.maPhim}
          className="card "
          style={{ marginBottom: 20, height: 600 }}
        >
          <img
            style={{ height: 350, objectFit: "cover" }}
            className="card-img-top img-fluid"
            src={ele.hinhAnh}
            alt="movie"
          />
          <div className="card-body">
            <h6 className="card-title" style={{ height: "40px" }}>
              {ele.tenPhim}
            </h6>
            <Button
              onClick={() => navigate(`/movie-detail/${ele.maPhim}`)}
              size="large"
              danger
            >
              Xem chi tiết
            </Button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container my-5">
      <div className="d-flex mb-3">
        <Button size="large" danger className="mr-2">
          Phim đang chiếu
        </Button>
        <Button size="large" danger>
          Phim sắp chiếu
        </Button>
      </div>

      <Slider {...settings}>{renderMovieList()}</Slider>
    </div>
  );
}
