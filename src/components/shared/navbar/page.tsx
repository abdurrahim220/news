"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/features/MobileMenu";
import { usePathname } from "next/navigation";
import { ToggleTheme } from "@/components/features/ToogleTheme";

const Navbar = () => {
  const [top, setTop] = useState<boolean>(true);

  const user = false;

  const pathname = usePathname();

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    if (window.scrollY > 10) {
      setTop(false);
    } else {
      setTop(true);
    }
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header
      className={`fixed w-full z-30 py-4 md:bg-opacity-90 transition-colors duration-300 ease-in-out border ${
        !top
          ? "bg-white backdrop-blur-md shadow-lg dark:text-black"
          : "dark:text-white"
      }`}
    >
      <nav className="flex mx-auto  max-w-7xl justify-between items-center px-4 sm:px-6 xl:px-0">
        {/* logo */}
        <div>
          <Link href={"/"}>Daily News</Link>
        </div>

        {/* desktop navigation */}
        <>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex space-x-8">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/news"
                  className={`link ${
                    pathname === "/news" ? "text-red-500" : ""
                  } hover:text-gray-500`}
                >
                  News
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-4 bg-white shadow-lg rounded-lg">
                    <li>
                      <NavigationMenuLink
                        href="/services/web-development"
                        className={`link ${
                          pathname === "/services/web-development"
                            ? "text-red-500"
                            : ""
                        } hover:text-gray-500 block p-2`}
                      >
                        Web Development
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/python"
                        className={`link ${
                          pathname === "/services/python" ? "text-red-500" : ""
                        } hover:text-gray-500 block p-2`}
                      >
                        Python
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/cpp"
                        className={`link ${
                          pathname === "/services/c++" ? "text-red-500" : ""
                        } hover:text-gray-500 block p-2`}
                      >
                        C++
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact-us"
                  className={`link ${
                    pathname === "/contact-us" ? "text-red-500" : ""
                  } hover:text-gray-500 block p-2`}
                >
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </>

        {/* darkMode and loginButton */}
        <div className="hidden md:flex items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-1">
            <p>Dark Mode</p>
            <ToggleTheme />
          </div>
          <div>
            {user === false ? <Button>Login</Button> : <Button>Logout</Button>}
          </div>
        </div>

        {/* hamburger menu */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
