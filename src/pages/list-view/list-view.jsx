import React from "react";
import PythonIcon from "../../assets/svgs/python";
import ReactIcon from "../../assets/svgs/react";
import AngularIcon from "../../assets/svgs/angular";
import HTMLIcon from "../../assets/svgs/html";
import CSSIcon from "../../assets/svgs/css";
import DjangoIcon from "../../assets/svgs/django";
import FigmaIcon from "../../assets/svgs/figma";
import JS from "../../assets/svgs/js";
import TS from "../../assets/svgs/ts";
import Mongo from "../../assets/svgs/mongo";

const icons = [
  { Component: PythonIcon, alt: "Python" },
  { Component: ReactIcon, alt: "React" },
  { Component: AngularIcon, alt: "Angular" },
  { Component: HTMLIcon, alt: "HTML" },
  { Component: CSSIcon, alt: "CSS" },
  { Component: DjangoIcon, alt: "Django" },
  { Component: FigmaIcon, alt: "Figma" },
  { Component: JS, alt: "JavaScript" },
  { Component: TS, alt: "TypeScript" },
  { Component: Mongo, alt: "MongoDB" },
];

function List_View() {
  return (
    <div className="mx-8 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee space-x-10">
        {icons.map(({ Component, alt }, index) => (
          <div
            className="filter grayscale transition-all duration-300 hover:grayscale-0"
            key={index}
          >
            <Component height="80px" width="80px" alt={alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List_View;
