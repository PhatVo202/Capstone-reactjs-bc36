import { axiosRequest } from "configs/axios.config";

export const fetchInforClusterApi = (maRap) => {
  return axiosRequest({
    maHeThongRap: maRap,
    url: `/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02`,
    method: "GET",
  });
};

export const fetchInfoRapApi = () => {
  return axiosRequest({
    url: `/QuanLyRap/LayThongTinHeThongRap`,
    method: "GET",
  });
};
