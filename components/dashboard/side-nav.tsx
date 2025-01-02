import React from "react";
import NavLinks from "./nav-links";

const SideNav = () => {
  return (
      <div className="flex flex-col px-[50px] py-[100px] items-start cursor-pointer gap-3">
        <NavLinks />
      </div>
  );
};

export default SideNav;
