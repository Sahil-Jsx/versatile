import React, { useState } from "react";
import Components from "../../components/components";

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const items = [
    { name: "Home", icon: <Components.Icons.Home /> },
    { name: "Services", icon: <Components.Icons.HomeRepairServiceRounded /> },
    { name: "About", icon: <Components.Icons.InfoRounded /> },
    { name: "Projects", icon: <Components.Icons.DvrRounded /> },
    { name: "Contact Us", icon: <Components.Icons.MailRounded /> },
  ];

  return (
    <>
      <section className="mt-4 mx-4 sm:mt-8 sm:mx-4 md:mt-8 md:mx-6 lg:mt-8 lg:mx-8 bg-[#e7edff]">
        <div className="flex justify-between border-black border-b-2">
          <div className="font-extrabold text-3xl uppercase">Versitile</div>
          <div className="flex justify-center">
            <button
              className="px-3 py-2 rounded-tr-2xl bg-black text-white"
              onClick={toggleSidebar}
            >
              <Components.Icons.Menu />
            </button>
          </div>
        </div>

        {/* Sidebar Component */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-between p-5 transform transition-transform duration-700 ease-in-in ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="text-white text-lg self-end"
            onClick={toggleSidebar}
          >
            <Components.Icons.Close />
          </button>
          <div className="flex justify-center items-center h-full text-white">
            <div className="grid grid-cols-2 gap-4">
              {items.map((item, index) => (
                <div key={index} className="group">
                  <div className="max-w-[23ch] text-center bg-black bg-opacity-50 p-14 rounded relative overflow-hidden transition-all duration-300 ease-in-out flex flex-col justify-center items-center gap-4">
                    <div className="icon">{item.icon}</div>
                    <span className="absolute cursor-pointer inset-0 w-full h-full flex justify-center items-center bg-black font-bold rounded top-full transition-all duration-300 ease-in-out group-hover:top-0 group-hover:text-white">
                      {item.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
