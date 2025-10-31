import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";

export function NavigationBar() {
  return (
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
            Articles
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            Docs
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}