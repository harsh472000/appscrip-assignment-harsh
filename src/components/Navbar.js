import React from "react";
import Image from "next/image";
import header from "../assets/header.svg";
import Logo from '../assets/Logo.svg'


import "../styles/navbar.css";
import '../styles/productList.css'

import { HEADER_TEXT, NAVBAR_ICONS, NAVBAR_LINKS, LANGUAGEOPTION } from "@/constants";
import Link from "next/link";
import { convertToUpperCase } from "@/utils/convertUppercase";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar uppercontent">
        {HEADER_TEXT.map((headerText) => {
          return (
            <span>
              <Image src={header} alt="lorem" className="navbar__headerSvg" />{" "}
              {headerText}
            </span>
          );
        })}
      </div>
      <div className="navbar lowercontent container">
        <div className="navbar__logo-img">
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="navbar__heading">
          <h1>LOGO</h1>
        </div>
        <ul className="navbar__icons">   
        {
            NAVBAR_ICONS.map((icons)=>{
                return(
                    <li>
                    <Image src={icons} alt="Search" />
                  </li>
                )
            })
        }
        <li><div className="productList__sorting">
          <select className="font-bold">
            {LANGUAGEOPTION.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {convertToUpperCase(item.label)}
                </option>
              );
            })}
          </select>
        </div></li>
        </ul>
      </div>
      <div className="container">
        <ul className="navbar__links">
            {
                NAVBAR_LINKS.map((link)=>{
                    return(
                        <Link href={link.href} key={link.key} className="navbar__links__label">{convertToUpperCase(link.label)}</Link>
                    )
                })
            }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
