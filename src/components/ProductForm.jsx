// import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Input, Row, Card, Form, Typography } from "antd";

const ProductForm = ({ onSubmit, initialValue }) => {
  const { TextArea } = Input;
  const [form, setForm] = useState(
    initialValue || {
      name: "",
      image: "",
      quantity: "",
      price: "",
      description: "",
    }
  );

  const navigate = useNavigate();

  const onFinish = (values) => {
    onSubmit(values);
    navigate("/");
  };

  const { Title } = Typography;
  return (
    <Card
      className="mt-3 px-5"
      bordered={false}
      style={{ width: "100%", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <Title level={2} className="text-center mt-3 mb-5">{`${
        initialValue ? "Edit" : "Add"
      } Product`}</Title>
      <Form
        onFinish={onFinish}
        name="addProduct"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Product name"
          name="name"
          rules={[{ required: true, message: "Please input product name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: "Please insert image link!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[{ required: true, message: "Please input initial stock!" }]}
        >
          <Input min={1} />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input price!" }]}
        >
          <Input min={1} />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input prodcut description!" },
          ]}
        >
          <TextArea
            placeholder="Product description..."
            autoSize={{ minRows: 3 }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 4 }}>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            style={{ width: "100%" }}
            icon={<i className="fa-solid fa-floppy-disk me-2"></i>}
          >
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ProductForm;
