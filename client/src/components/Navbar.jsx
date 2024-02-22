import { useState, useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavBarItem = ({ title, classProps }) => {
  let href = "";
  if (title === "Market") href = "https://www.coinbase.com/price/ethereum";
  else if (title === "Exchange") href = "https://www.coinbase.com/converter/eth/usd";
  else if (title === "Tutorials") href = "https://www.coinbase.com/learn/tips-and-tutorials";
  else href = "https://portfolio.metamask.io/";
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </li>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <div className="flex flex-row">
          <p className="text-start pr-24 text-white text-4xl w-full py:3 cursor-pointer">
            <a href="https://cryptoexpresshub.com">CRYPTOEXPRESSHUB</a>
          </p>
        </div>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Portfolio"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
      </ul>

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Portfolio"].map(
              (item, index) => (
                <div
                  key={item + index}
                  
                  className="my-2 text-lg"
                >
                  <NavBarItem title={item} />
                </div>
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
