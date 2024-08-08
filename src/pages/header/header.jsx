import React, { useState } from "react";
import Components from "../../components/components";

function Header() {
  return (
    <>
      <section>
        <div className="flex justify-between border-b-2 border-black">
          <div>
            <div className="font-extrabold text-3xl uppercase">Versatile</div>
          </div>
          <div className="flex  items-center text-center bg-black justify-center px-3 border-t-2 cursor-pointer border-l-2 border-r-2 border-black m-0">
            Get Started
            <Components.Icons.Rocket className="m-0 p-0 ms-3 mt-1" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
