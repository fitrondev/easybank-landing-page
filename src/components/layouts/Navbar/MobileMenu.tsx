import Hamburger from "@/assets/icon-hamburger.svg";
import Close from "@/assets/icon-close.svg";
import { useState } from "react";
import { cn } from "@/lib/utils";
import NavMenu from "./NavMenu";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="lg:hidden cursor-pointer" onClick={openMenu}>
        {!isOpen ? <img src={Hamburger} alt="" /> : <img src={Close} alt="" />}
      </div>

      <div
        className={cn(
          "w-full fixed left-0 h-[calc(100vh-64px)] flex justify-center bg-black/50 transition-all duration-200 ease-in-out select-none",
          isOpen ? "top-16" : "-top-full"
        )}>
        <div className="w-[360px] h-[300px] mt-5 flex items-center justify-center bg-white border rounded-sm">
          <NavMenu className="flex flex-col gap-5 text-2xl text-foreground text-center" />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
