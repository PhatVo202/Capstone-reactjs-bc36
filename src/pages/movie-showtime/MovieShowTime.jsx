import React, { useEffect, useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { fetchMovieDetailApi } from "services/movie";
import { useParams } from "react-router-dom";
import { fetchInfoRapApi } from "services/inforcluster";
import { render } from "@testing-library/react";

export default function MovieShowTime() {
  const params = useParams();
  const [state, setState] = useState({});
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

    console.log(result);
    setCumRap(result.data.content);
  };

  const renderRap = () => {
    return cumRap.map((item, index) => {
      return (
        <Select.Option key={index} value={item.maHeThongRap}>
          {item.maHeThongRap}
        </Select.Option>
      );
    });
  };

  return (
    <div>
      <div className="mb-4">
        <h3>Tạo lịch chiếu - {state.tenPhim}</h3>
        <img src={state.hinhAnh} alt="" width={208} height={300} />
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
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Hệ thống rạp">
            <Select>{renderRap()}</Select>
          </Form.Item>
          <Form.Item label="Cụm rạp">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                {
                  title: "Light",
                  value: "light",
                  children: [
                    {
                      title: "Bamboo",
                      value: "bamboo",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Cascader">
            <Cascader
              options={[
                {
                  value: "zhejiang",
                  label: "Zhejiang",
                  children: [
                    {
                      value: "hangzhou",
                      label: "Hangzhou",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
