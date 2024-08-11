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
import Marquee from "react-fast-marquee"; // Import the marquee library

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
    <div className="relative overflow-hidden h-80 w-full space-y-8">
      {/* First Marquee (Black & White with Hover Color Effect) */}
      <Marquee gradient={false}>
        {icons.map(({ Component, alt }, index) => (
          <div
            key={index}
            className="mx-4 transition duration-300 grayscale hover:grayscale-0"
          >
            <Component alt={alt} height="100px" width="100px" />
          </div>
        ))}
      </Marquee>

      {/* Second Marquee (Opposite Direction, Black & White with Hover Color Effect) */}
      <Marquee gradient={false} direction="right">
        {icons.map(({ Component, alt }, index) => (
          <div
            key={index}
            className="mx-4 transition duration-300 grayscale hover:grayscale-0"
          >
            <Component alt={alt} height="100px" width="100px" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default List_View;
