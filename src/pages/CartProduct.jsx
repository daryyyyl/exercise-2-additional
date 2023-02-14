import React, { Component } from "react";
import { Button, Space, Card, Input, Collapse } from "antd";

export default class Cart extends Component {
  formatText(id) {
    if (this.props.cartProduct.quantity > 0) {
      return this.props.cartProduct.quantity;
    }
    this.props.onDelete(id);
  }

  render() {
    const { cartProduct } = this.props;
    const { Meta } = Card;
    const { Panel } = Collapse;
    return (
      <>
        <Card cover={<img alt={cartProduct.name} src={cartProduct.image} />}>
          <Meta title={cartProduct.name} className="mb-2 text-truncate" />
          <Collapse ghost>
            <Panel header="Product Description" key="1">
              <p className="text-break">{cartProduct.description}</p>
            </Panel>
          </Collapse>
          <div className="site-input-group-wrapper mb-2">
            <Input.Group compact>
              <Button
                type="primary"
                onClick={() => this.props.onIncrement(cartProduct.id, "cart")}
              >
                +
              </Button>
              <Input
                style={{ width: "calc(100% - 78px)" }}
                value={this.formatText(cartProduct.id)}
                className="text-center"
                readOnly
              />
              <Button
                type="primary"
                onClick={() => this.props.onDecrement(cartProduct.id, "cart")}
              >
                -
              </Button>
            </Input.Group>
          </div>
          {cartProduct.quantity > 0 && (
            <Space>
              <Button
                type="primary"
                size="middle"
                onClick={() => this.props.onDelete(cartProduct.id)}
                danger
              >
                Remove<i className="fa-solid fa-trash ms-2"></i>
              </Button>
            </Space>
          )}
        </Card>
        <br />
      </>
    );
  }
}
