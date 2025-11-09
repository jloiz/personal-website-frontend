import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";

export function NavigationBar() {
  return (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand></NavbarBrand>
      <NavbarContent className="felx felx-gap sm:gap-2 gap-4" justify="center">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={`/profile`}>Profile</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={`/projects`}>Projects</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/articles">Articles</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/docs">Docs</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
