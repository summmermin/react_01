import React, { useState, useEffect } from "react";
import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://058b9450-cd1b-4dfe-bf1b-dbfdfcfda353.mock.pstmn.io/products")
      .then((result) => {
        products = result.data.products;
        setProducts(products);
        console.log(products);
      })
      .catch((error) => {
        console.log(`통신실패:${error}`);
      });
  }, []);
  return (
    <>
      <div id="header">
        <h1>
          <img src="images/logo_60x29.png" alt="" />
        </h1>
        <div id="header-area">
          <img src="images/img_top1.gif" alt="" />
        </div>
        <div id="header-area-2">
          <img src="images/img_top2.jpg" alt="" />
        </div>
      </div>
      <div id="body">
        <h1>NB WINDBREAKER</h1>
        <div id="product-list">
          {products.map((product, idx) => {
            return (
              <div className="product-card" key={idx}>
                <div>
                  <img className="product-img" src={product.imageUrl} alt={product.name} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}</span>
                  <div className="product-seller">
                    <img src="images/icons/avatar.png" alt="" className="product-avatar" />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="banner">
        <img src="images/banner.jpg" alt="" />
      </div>
      {/* <div id="body-2">
      <h1>NB BESTSELLER</h1>
        <div id="product-list">
          {products.map((product, idy) => {
            return (
              <div className="product-card" key={idy}>
                <div>
                  <img className="product-img" src={product.imageUrl} alt={product.name} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}</span>
                  <div className="product-seller">
                    <img src="images/icons/avatar.png" alt="" className="product-avatar" />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      <div id="footer">
        <a href="#">회사소개</a>
        <a href="#">이용약관</a>
        <a href="#">통신판매업:123-1234</a>
        <a href="#">사업자등록번호:456-56-78951</a>
        <a href="#"></a>
      </div>
    </>
  );
};
export default MainPage;
