import React from "react";
import "../styles/footer.css";
import Flag from "../assets/Flag.svg";
import Image from "next/image";
import Link from "next/link";
import { FOOTERLEFTLINKS, FOOTERQUICKLINKS, FOOTERSOCIALICONS, PAYMENTICONS } from "@/constants";
import { convertToUpperCase } from "@/utils/convertUppercase";
import Button from "./common/Button";
import Input from "./common/Input";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__information">
        <div className="footer__upperContent">
          <div className="upperContent__leftSide">
            <div className="leftSide__title footer__title">
              Be the first to know
            </div>
            <div className="leftSide__subTitle">
              Sign up for updates from mettā muse.
            </div>
            <div className="leftSide__inputButton">
              {/* <input type="text" placeholder="Enter your e-mail..." /> */}
              <Input type="text" placeholder="Enter your e-mail..." value="" />
              <Button>Subscribe</Button>
            </div>
          </div>
          <div className="upperContent__rightSide">
            <div className="rightSide__contactUs footer__title">CONTACT US</div>
            <div className="rightSide__mobileNo">+44 221 133 5360</div>
            <div className="rightSide__email">customercare@mettamuse.com</div>
            <div className="rightSide__currency">
              <Image src={Flag} alt="flag" /> Currency
            </div>
            <div className="rightSide__note">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </div>
          </div>
        </div>
        <div className="footer__lowerContent">
            <div className="lowerContent__museQuickLink">
            <div className="lowerContent__leftSide">
            <div className="footer__title font-bold">mettā muse</div>
            <ul>
              {FOOTERLEFTLINKS.map((footerlink) => {
                return (
                  <li key={footerlink.key}>
                    <Link href={footerlink.href}>{footerlink.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lowerContent__middle">
            <div className="footer__title font-bold">QUICK LINKS</div>
            <ul>
              {FOOTERQUICKLINKS.map((footerlink) => {
                return (
                  <li key={footerlink.key}>
                    <Link href={footerlink.href}>{footerlink.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
            </div>
          
          <div className="lowerContent__rightSide">
            <div className="rightSide_all">
                <div className="rightside__followus">
                    <div className="footer__title">{convertToUpperCase('Follow Us')}</div>
                    <div className="followus__icons">
                        <ul>
                            {
                                FOOTERSOCIALICONS.map((icon, index)=>{
                                    return(
                                        <li key={index}><Image src={icon.icon} alt={icon.label} /></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="rightside__accepts">
                <div className="footer__title">{convertToUpperCase('mettā muse Accepts')}</div>
                <div className="payments__icons">
                    <ul>
                    {
                                PAYMENTICONS.map((paymentIcon,index)=>{
                                    return(
                                        <li key={index}><Image src={paymentIcon.icon} alt={paymentIcon.label} /></li>
                                    )
                                })
                            }
                    </ul>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">Copyright © 2023 mettamuse. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
