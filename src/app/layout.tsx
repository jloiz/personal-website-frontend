"use client";

import { Provider } from "./provider";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Provider>
          <div className="titleItem text-6xl font-bold">
            <h1 >
              Joshua Loizou
            </h1>
          </div>
          <Navbar shouldHideOnScroll isBordered>
            <NavbarBrand></NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link href="#">
                  Profile
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="#">
                  Projects
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="#">
                  Blog
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="#">
                  Docs
                </Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          {children}
        </Provider>
      </body>
    </html>
  );
}
