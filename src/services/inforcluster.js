import { axiosRequest } from "configs/axios.config";

export const fetchInforClusterApi = (id) => {
  return axiosRequest({
    url: `/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03`,
    method: "GET",
  });
};
