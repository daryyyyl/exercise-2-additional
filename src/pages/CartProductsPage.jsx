import React, { Component } from "react";
import Product from "./Product";
import CartProduct from "./CartProduct";
import { Button, Row, Col, Space, Divider, Typography, Empty } from "antd";
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

// export default ProductsPage;
