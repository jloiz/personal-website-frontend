import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

console.log(base)
export function NavigationBar() {
  return (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand></NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={`${base}/profile`}>
            Profile
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={`${base}/projects`}>
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