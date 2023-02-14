import React, { Component } from "react";
import { Button, Space, Card, Input, Collapse } from "antd";

export default class Counter extends Component {
  getName() {
    return <h1>Big Name</h1>;
  }

  getClassName() {
    if (this.props.product.quantity > 0) {
      return "badge bg-primary";
    }
    return "badge bg-warning text-dark";
  }

  formatText() {
    if (this.props.product.quantity > 0) {
      return this.props.product.quantity;
    }
    this.props.product.quantity = 0;
    return "Zero";
  }

  formatButton() {
    if (this.props.product.quantity > 0) {
      return this.props.product.quantity;
    }
    return;
  }

  componentWillUnmount() {
    // console.log("unmounting...");
  }

  render() {
    const { Panel } = Collapse;
    const { product } = this.props;
    const { Meta } = Card;
    return (
      <>
        <Card cover={<img alt={product.name} src={product.image} />}>
          <Meta title={product.name} className="mb-2 text-truncate" />
          <Collapse ghost>
            <Panel header="Product Description" key="1">
              <p className="text-break">{product.description}</p>
            </Panel>
          </Collapse>
          <div className="site-input-group-wrapper mb-2">
            <Input.Group compact>
              <Button
                type="primary"
                onClick={() => this.props.onIncrement(product.id, "list")}
              >
                +
              </Button>
              <Input
                style={{ width: "calc(100% - 78px)" }}
                value={this.formatText()}
                className="text-center"
                readOnly
              />
              <Button
                type="primary"
                onClick={() => this.props.onDecrement(product.id, "list")}
              >
                -
              </Button>
            </Input.Group>
          </div>
          {product.quantity > 0 && (
            <Space>
              <Button
                type="primary"
                size="middle"
                onClick={() => this.props.addToCart(product)}
              >
                Add<i className="fa-solid fa-cart-plus ms-2"></i>
              </Button>
            </Space>
          )}
        </Card>
      </>
    );
  }
}
