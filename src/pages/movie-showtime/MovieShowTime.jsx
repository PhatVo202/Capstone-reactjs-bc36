import React, { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Select, Space, Tag } from "antd";
import { fetchMovieDetailApi } from "services/movie";
import { useParams } from "react-router-dom";
import { fetchInfoCumRapApi, fetchInfoRapApi } from "services/inforcluster";
import { addCalenderMovieApi } from "services/ticket";
import moment from "moment";

export default function MovieShowTime() {
  const params = useParams();
  const [state, setState] = useState({});
  const [heThongRap, setHeThongRap] = useState([]);
  const [cumRap, setCumRap] = useState([]);
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  useEffect(() => {
    getMovieDetails();
    getInforCluster();
  }, []);

  const getMovieDetails = async () => {
    const result = await fetchMovieDetailApi(params.id);
    setState(result.data.content);
  };

  const getInforCluster = async () => {
    const result = await fetchInfoRapApi();
    setHeThongRap(result.data.content);
  };

  const renderHeThongRap = () => {
    return heThongRap.map((item, index) => {
      return (
        <Select.Option key={index} value={item.maHeThongRap}>
          {item.maHeThongRap}
        </Select.Option>
      );
    });
  };

  const renderCumRap = () => {
    return cumRap.map((item, index) => {
      return (
        <Select.Option key={index} value={item.maCumRap}>
          {item.maCumRap}
        </Select.Option>
      );
    });
  };

  const handleChange = async (event) => {
    const result = await fetchInfoCumRapApi(event);
    console.log(result);
    setCumRap(result.data.content);
  };

  const handleFinish = async (values) => {
    values.ngayChieuGioChieu = values.ngayChieuGioChieu.format(
      "DD/MM/YYYY hh:mm:ss "
    );

    const formData = new FormData();

    formData.append("maPhim", params.id);
    formData.append("ngayChieuGioChieu", values.ngayChieuGioChieu);
    formData.append("maRap", values.maRap);
    formData.append("giaVe", values.giaVe);

    await addCalenderMovieApi(formData);
  };

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  return (
    <div>
      <div className="mb-4">
        <Space className="d-block">
          <Tag color="#2db7f5">
            <h3>Tạo lịch chiếu </h3>
          </Tag>
          <span>- {state.tenPhim}</span>
          <img src={state.hinhAnh} alt="" width={208} height={300} />
        </Space>
      </div>
      <div>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
            maPhim: 0,
            ngayChieuGioChieu: "",
            maRap: "",
            giaVe: 0,
          }}
          onFinish={handleFinish}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="Hệ thống rạp">
            <Select onChange={(event) => handleChange(event)}>
              {renderHeThongRap()}
            </Select>
          </Form.Item>
          <Form.Item label="Cụm rạp" name="maRap">
            <Select>{renderCumRap()}</Select>
          </Form.Item>
          <Form.Item label="Ngày chiếu" name="ngayChieuGioChieu" {...config}>
            <DatePicker
              showTime
              name="ngayChieuGioChieu"
              format="YYYY-MM-DD HH:mm"
            />
          </Form.Item>
          <Form.Item label="Giá vé" name="giaVe">
            <Input />
          </Form.Item>
          <Form.Item label="Button">
            <Button htmlType="submit">Tạo lịch chiếu</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
