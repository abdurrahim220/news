"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const MobileMenu = () => {
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
  return (
    <div className="md:hidden">
      <Button onClick={() => setIsMobileMenu(!isMobileMenu)}>
        {isMobileMenu ? (
          <AiOutlineClose size={25} />
        ) : (
          <AiOutlineMenu size={25} />
        )}
      </Button>
    </div>
  );
};

export default MobileMenu;
