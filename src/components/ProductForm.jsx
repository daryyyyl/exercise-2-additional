// import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Input, Row, Card, Form, Typography } from "antd";

const ProductForm = ({ onSubmit, initialValue }) => {
  const { TextArea } = Input;
  //   const { Meta } = Card;
  const [form, setForm] = useState(
    initialValue || {
      name: "",
      image: "",
      quantity: "",
      price: "",
      description: "",
    }
  );

  //   const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  //   const schema = Joi.object({
  //     name: Joi.string().min(2).max(100).required(),
  //     image: Joi.string().required(),
  //     quantity: Joi.string().required(),
  //     price: Joi.string().required(),
  //     description: Joi.string().min(2).max(500).required(),
  //   });

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // console.log(form);
  //     onSubmit(form);
  //     navigate("/");
  //   };

  const onFinish = (values) => {
    // event.preventDefault();
    // console.log(form);
    onSubmit(values);
    navigate("/");
  };

  const handleChange = ({ currentTarget: input }) => {
    console.clear();
    console.log(input.value);
    setForm({
      ...form,
      [input.name]: input.value,
    });

    //   const { error } = schema
    //     .extract(input.name)
    //     .label(input.name)
    //     .validate(input.value);

    //   if (error) {
    //     setErrors({ ...errors, [input.name]: error.details[0].message });
    //   } else {
    //     delete errors[input.name];
    //     setErrors(errors);
    //   }
  };

  //   const isFormInvalid = () => {
  //     const result = schema.validate(form);

  //     console.log(result);

  //     return !!result.error;
  //   };

  const { Title } = Typography;
  return (
    // <Card
    //   component="form"
    //   onSubmit={handleSubmit}
    //   style={{
    //     width: "100%",
    //     textAlign: "center",
    //     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    //   }}
    // >
    //   <Meta title={`${initialValue ? "Edit" : "Add"} Product`} />
    //   <Row className="mt-4">
    //     <Col>
    //       <Input
    //         name="name"
    //         onChange={handleChange}
    //         value={form.name}
    //         className="mb-2"
    //         placeholder="Product name"
    //       />
    //       <Input
    //         name="image"
    //         onChange={handleChange}
    //         value={form.image}
    //         className="mb-2"
    //         placeholder="Image link"
    //       />
    //       <Input
    //         name="quantity"
    //         onChange={handleChange}
    //         value={form.quantity}
    //         className="mb-2"
    //         placeholder="Quantity"
    //       />
    //       <Input
    //         name="price"
    //         onChange={handleChange}
    //         value={form.price}
    //         className="mb-2"
    //         placeholder="Price"
    //       />
    //       <TextArea
    //         name="description"
    //         onChange={handleChange}
    //         value={form.description}
    //         className="mb-2"
    //         placeholder="Product description..."
    //         autoSize={{ minRows: 3 }}
    //       />
    //       <Button
    //         icon={<i className="fa-solid fa-floppy-disk me-2"></i>}
    //         htmlType="submit"
    //         type="primary"
    //       >
    //         Submit
    //       </Button>
    //     </Col>
    //   </Row>
    // </Card>
    //
    //
    //
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
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ProductForm;
