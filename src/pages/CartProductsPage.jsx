import React, { Component } from "react";
import CartProduct from "./CartProduct";
import { Row, Col, Typography, Empty } from "antd";

export default class Counters extends Component {
  render() {
    const { Title } = Typography;
    const { onIncrement, onDecrement, onDelete, cartProducts, onReset } =
      this.props;
    return (
      <>
        {cartProducts.length === 0 ? (
          <Empty
            className="mt-5"
            description={
              <Title level={3}>No products listed in your Cart</Title>
            }
          />
        ) : (
          <Row gutter={[16, 16]}>
            {cartProducts.map((cartProduct) => (
              <Col xs={24} md={12} xl={6} key={cartProduct.id}>
                <CartProduct
                  cartProduct={cartProduct}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  onDelete={onDelete}
                />
              </Col>
            ))}
          </Row>
        )}
      </>
    );
  }
}
