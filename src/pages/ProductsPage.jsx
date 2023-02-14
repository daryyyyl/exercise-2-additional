import React, { Component } from "react";
import Product from "./Product";
import CartProduct from "./CartProduct";
import { Button, Row, Col, Space, Divider } from "antd";
import { Link } from "react-router-dom";

// const ProductsPage = ({ products }) => {
//   return (
//     <Row gutter={[16, 16]} className="mt-3">
//       <Col span={24}>
//         <Space>
//           <Link to="/products/new">
//             <Button
//               type="primary"
//               icon={<i className="fa-solid fa-plus me-2"></i>}
//             >
//               Add Product
//             </Button>
//           </Link>
//           <Button
//             type="primary"
//             icon={<i className="fa-solid fa-rotate-right me-2"></i>}
//           >
//             Reset
//           </Button>
//         </Space>
//       </Col>
//       {products.map((product) => (
//         <Col xs={8} lg={8} xl={6} key={product.id}>
//           <Product
//             product={product}
//             // addToCart={addToCart}
//             // onIncrement={onIncrement}
//             // onDecrement={onDecrement}
//           />
//         </Col>
//       ))}
//     </Row>
//   );
// };

export default class Counters extends Component {
  render() {
    const {
      onIncrement,
      onDecrement,
      onDelete,
      products,
      cartProducts,
      addToCart,
      onReset,
    } = this.props;
    return (
      <Row gutter={[16, 16]} className="my-3">
        <Col span={24}>
          <Space>
            <Link to="/products/new">
              <Button
                type="primary"
                icon={<i className="fa-solid fa-plus me-2"></i>}
              >
                Add Product
              </Button>
            </Link>
            <Button
              onClick={onReset}
              type="primary"
              icon={<i className="fa-solid fa-rotate-right me-2"></i>}
            >
              Reset
            </Button>
          </Space>
        </Col>
        {products.map((product) => (
          <Col xs={24} md={12} xl={6} key={product.id}>
            <Product
              product={product}
              addToCart={addToCart}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </Col>
        ))}
      </Row>
    );
  }
}

// export default ProductsPage;
