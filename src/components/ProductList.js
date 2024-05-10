"use client";
import React, { useState } from "react";
import { convertToUpperCase } from "@/utils/convertUppercase";
import "../styles/productList.css";
import { SORTINGMENU } from "@/constants";
import Filters from "./Filters";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <section className="productList">
      <div className="productList__menu">
        <div>
          <span className="content__number font-bold">
            {convertToUpperCase("3454 items")}
          </span>
          {toggle ? "< " : "> "}
          <span className="show-hide" onClick={() => setToggle(!toggle)}>
            {toggle
              ? convertToUpperCase("Hide Filters")
              : convertToUpperCase("Show filters")}
          </span>
        </div>
        <div className="productList__sorting">
          <select className="font-bold">
            {SORTINGMENU.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {convertToUpperCase(item.label)}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="productList__content">
        {toggle && <Filters />}
        <div className={` ${toggle ?'content__products__toggle' : 'content__products' }`}>
          {products?.map((product, index) => {
            return (
                <ProductCard key={index} img={product.image} title={product.title}/>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
