import React, { useEffect, useState } from "react";
import icon from "../assets/coding-window.png";

function Header() {
  const [isHeaderShown, setIsHeaderShown] = useState(true);
  const [isLogoHidden, setIsLogoHidden] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = (e.target as any).getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  useEffect(() => {
    const body = document.body;
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setIsHeaderShown(true);
        setIsLogoHidden(false);
        return;
      } else {
        setIsLogoHidden(true);
      }

      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        setIsHeaderShown(false);
      } else if (
        currentScroll < lastScroll &&
        !body.classList.contains(scrollUp)
      ) {
        // up
        setIsHeaderShown(true);
      }
      lastScroll = currentScroll;
    });
  }, []);

  return (
    <div
      className={`${
        isHeaderShown ? "translate-y-0" : "-translate-y-20"
      } transition-all duration-500 sticky top-0 right-0 z-30 flex`}
    >
      <div
        className="p-6 pl-10 flex gap-4 transition-all duration-500"
        style={{ opacity: isLogoHidden ? "0" : "1" }}
      >
        <img src={icon} alt="coding icon" className="w-8"></img>
        <h3 className="text-secondary text-2xl">Daniel Hutsuliak</h3>
      </div>
      <div className="bg-secondary text-xl text-primary w-1/4 ml-auto flex gap-6 justify-between p-6 pl-16 pr-10 rounded-bl-full shadow-lg">
        <a
          href="#home"
          onClick={handleClick}
          className="hover:text-white hover:cursor-pointer transition-colors duration-700"
        >
          Home
        </a>
        <a
          href="#works"
          onClick={handleClick}
          className="hover:text-white hover:cursor-pointer transition-colors duration-700"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={handleClick}
          className="hover:text-white hover:cursor-pointer transition-colors duration-700"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Header;
