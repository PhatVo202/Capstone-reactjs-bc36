import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";
import { axiosRequest } from "../configs/axios.config";

export const fetchTicketDetailApi = (id) => {
  return axiosRequest({
    url: `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
    method: "GET",
  });
};

export const bookTicketApi = (data) => {
  return axiosRequest({
    url: "/QuanLyDatVe/DatVe",
    method: "POST",
    data: data,
  });
};

export const addCalenderMovieApi = (data) => {
  return axiosRequest({
    url: "/QuanLyDatVe/TaoLichChieu",
    method: "POST",
    data: data,
  });
};
