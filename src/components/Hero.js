import React from "react";
import { convertToUpperCase } from "@/utils/convertUppercase";
import '../styles/hero.css'

const Hero = () => {
  return (
    <section className="hero" aria-label="Hey, I'm a hero!">
      <heading className="hero__heading">{convertToUpperCase('discover our products')}</heading>
      <div className="hero__subheading">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</div>
    </section>
  );
};

export default Hero;
