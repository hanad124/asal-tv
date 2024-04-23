import React from "react";

const SliderButtons = ({ buttons }) => {
  return buttons.map(({ id, link, text }) => (
    <a target="_blank" key={id} href={link}>
      <span>{text}</span>
    </a>
  ));
};

export default SliderButtons;
