import React, { Component } from "react";
import NavBar from "./pages/NavBar";
import ProductsPage from "./pages/ProductsPage";
import AddProductPage from "./pages/AddProductPage";
import CartProductsPage from "./pages/CartProductsPage";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

export default class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "product 1",
        image:
          "https://static.nike.com/a/images/t_default/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-66RGqF.png",
        quantity: 1,
        description: "This is kicks zone product number 1",
      },
      {
        id: 2,
        name: "product 2",
        image:
          "https://static.nike.com/a/images/t_default/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-66RGqF.png",
        quantity: 2,
        description: "This is kicks zone product number 2",
      },
      {
        id: 3,
        name: "product 3",
        image:
          "https://static.nike.com/a/images/t_default/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-66RGqF.png",
        quantity: 3,
        description: "This is kicks zone product number 3",
      },
      {
        id: 4,
        name: "product 4",
        image:
          "https://static.nike.com/a/images/t_default/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-66RGqF.png",
        quantity: 4,
        description: "This is kicks zone product number 4",
      },
      {
        id: 5,
        name: "product 5",
        image:
          "https://static.nike.com/a/images/t_default/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-66RGqF.png",
        quantity: 5,
        description: "This is kicks zone product number 5",
      },
    ],
    cart: [
      {
        id: 1,
        name: "product 1",
        image:
          "https://static.nike.com/a/images/t_default/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-66RGqF.png",
        quantity: 1,
        description: "This is kicks zone product number 1",
      },
      {
        id: 2,
        name: "product 2",
        image:
          "https://static.nike.com/a/images/t_default/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-66RGqF.png",
        quantity: 2,
        description: "This is kicks zone product number 2",
      },
    ],
  };

  handleAddProduct = (product) => {
    this.setState({
      products: (this.state.products = [
        ...this.state.products,
        { ...product, id: this.state.products.length * 999 + 1 },
      ]),
    });
  };

  handleDelete = (id) => {
    this.setState({
      cart: this.state.cart.filter((item) => item.id !== id),
    });
  };

  handleReset = () => {
    this.setState({
      products: this.state.products.map((product) => {
        return {
          ...product,
          quantity: 0,
        };
      }),
    });
  };

  addToCart = (data) => {
    let exists = false;

    this.state.cart.map((product) => {
      if (product.id === data.id) exists = true;
      return;
    });

    if (exists) {
      this.setState({
        cart: this.state.cart.map((item) => {
          if (item.id === data.id) {
            exists = true;
            return {
              ...item,
              quantity: item.quantity + data.quantity,
            };
          }
          return item;
        }),
      });
    } else {
      this.setState({
        cart: (this.state.cart = [...this.state.cart, data]),
      });
    }
  };

  handleIncrement = (id, loc) => {
    if (loc === "list") {
      this.setState({
        products: this.state.products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        }),
      });
    } else {
      this.setState({
        cart: this.state.cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      });
    }
  };

  handleDecrement = (id, loc) => {
    if (loc === "list") {
      this.setState({
        products: this.state.products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        }),
      });
    } else if (loc === "cart") {
      this.setState({
        cart: this.state.cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        }),
      });
    }
  };

  getCartWithValue = () => {
    return this.state.cart.filter((item) => item.quantity > 0).length;
  };

  displayCart = () => {
    return this.state.cart;
  };

  render() {
    return (
      <>
        <NavBar
          totalCount={this.getCartWithValue()}
          cartProducts={this.state.cart}
        />
        <div className="container-sm">
          <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route
              path="/products"
              element={
                <ProductsPage
                  products={this.state.products}
                  cartProducts={this.state.cart}
                  addToCart={this.addToCart}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onReset={this.handleReset}
                />
              }
            />
            <Route
              path="/cartProducts"
              element={
                <CartProductsPage
                  cartProducts={this.state.cart}
                  addToCart={this.addToCart}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              }
            />
            <Route
              path="/products/new"
              element={<AddProductPage onAddProduct={this.handleAddProduct} />}
            />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </div>
      </>
    );
  }
}
