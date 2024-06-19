import logo from "../assets/logo.svg";
import { TbMenu } from "react-icons/tb";
import { navigation } from "../constants";
import circle from "../assets/circle-stream.svg";
import { useState } from "react";

const Header = () => {
  const [openNav, setNav] = useState(false);

  const toggleNav = () => {
    if (openNav) {
      setNav(false);
    } else {
      setNav(true);
    }
  };

  return (
    <div>
      <nav className="fixed z-50 w-full px-6 py-8 top-0 start-0 border-b-2 border-zinc-800 bg-dark bg-opacity-80 lg:backdrop-blur-sm">
        <div className="flex items-center justify-between mx-auto">
          <div className="flex items-center space-x-3 rtl:spcae-x-reverse">
            <img className="w-[10rem] lg:w-[200px]" src={logo} alt="logo" />
          </div>
          <div className="hidden lg:flex uppercase text-sm">
            {navigation.map((item) => (
              <a
                href={item.url}
                key={item.id}
                className="px-6 hover:text-lime transition-color duration-300"
              >
                {item.title}
              </a>
            ))}
          </div>
          <button className="lg:hidden" onClick={toggleNav}>
            <TbMenu className="text-2xl" openNav={openNav} />
          </button>
          <div className="hidden md:flex gap-3">
            <div className="w-[10px] lg:w-[20px] flex items-center">
              <img src={circle} alt="Circle icon" />
            </div>
            <div>
              <a href="#" className="uppercase text-sm">
                streaming now
              </a>
            </div>
          </div>

          {/* Open Nav */}
          <div
            className={`${
              openNav ? "flex" : "hidden"
            } bg-dark fixed top-0 left-0 right-0 bottom-0 -z-30 flex items-center justify-center`}
          >
            <div className="uppercase text-3xl text-center">
              {navigation.map((item) => (
                <a
                  href={item.url}
                  key={item.id}
                  className="block py-4 px-6 hover:text-lime transition-color duration-300"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

// ${openNav ? "flex" : "hidden"}
