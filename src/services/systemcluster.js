import { axiosRequest } from "configs/axios.config";

export const fetchSystemClusterApi = () => {
  return axiosRequest({
    url: `/QuanLyRap/LayThongTinHeThongRap`,
    method: "GET",
  });
};

export const fetchInforCalendarApi = (id) => {
  return axiosRequest({
    url: `/QuanLyRap/LayThongTinLichChieuHeThongRap${id}`,
    method: "GET",
  });
};
