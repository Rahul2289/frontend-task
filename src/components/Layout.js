import React, { useState } from "react";
import JsonData from "../data.json";

const Layout = () => {
  const [data, setData] = useState([JsonData]);

  const addToCart = () => {
    console.log("Product Added to the cart");
    console.log("List of product present in cart array");
  };
  const RemoveFromCart = () => {
    console.log("Product removed from the cart");
    console.log("List of product present in cart array");
  };

  return (
    <div>
      {data.map((item, i) => {
        return (
          <div key={i} className="container">
            <h4>{item.data[0].name}</h4>
            <div className="wrapper">
              <div>
                <h5>Name:{item.data[0].productList[0].name}</h5>
                <h5 className="price">
                  price:{item.data[0].productList[0].price}
                </h5>
                <button onClick={addToCart}>Add to the cart</button>
                <button onClick={RemoveFromCart}>Remove from card</button>
              </div>
              <div>
                <h5>Name:{item.data[0].productList[1].name}</h5>
                <h5 className="price">
                  price:{item.data[0].productList[1].price}
                </h5>
                <button onClick={addToCart}>Add to the cart</button>
                <button onClick={RemoveFromCart}>Remove from card</button>
              </div>
            </div>
            <h4>{item.data[1].name}</h4>
            <div className="wrapper">
              <div>
                <h5>Name:{item.data[1].productList[0].name}</h5>
                <h5 className="price">
                  price:{item.data[1].productList[0].price}
                </h5>
                <button onClick={addToCart}>Add to the cart</button>
                <button onClick={RemoveFromCart}>Remove from card</button>
              </div>
              <div>
                <h5>Name:{item.data[1].productList[1].name}</h5>
                <h5 className="price">
                  price:{item.data[1].productList[1].price}
                </h5>
                <button onClick={addToCart}>Add to the cart</button>
                <button onClick={RemoveFromCart}>Remove from card</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Layout;
