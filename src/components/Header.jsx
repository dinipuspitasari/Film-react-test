import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Avatar,
  Dropdown,
  DropdownHeader,
  DropdownItem,
  DropdownDivider,
} from "flowbite-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /* ✅ FIXED WRAPPER */
    <header
      className={`sticky top-0 z-[100] w-full transition-all duration-300
        ${scrolled
          ? "bg-white/20 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >
      <Navbar rounded={false} className="bg-transparent">
        <div className="flex w-full flex-wrap items-center justify-between px-6 py-4">

          {/* BRAND */}
          <NavbarBrand href="#">
            <span className="text-4xl font-bold text-white">
              Movie.id
            </span>
          </NavbarBrand>

          {/* RIGHT */}
          <div className="flex items-center gap-4 md:order-2">
            <Dropdown
              inline
              arrowIcon={false}
              placement="bottom-end"
              label={
                <Avatar
                  img="https://i.pravatar.cc/100"
                  rounded
                  alt="User"
                />
              }
            >
              <DropdownHeader>
                <span className="block text-sm font-medium">
                  Joseph McFall
                </span>
                <span className="block truncate text-sm text-gray-500">
                  name@flowbite.com
                </span>
              </DropdownHeader>
              <DropdownItem>Dashboard</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem>Earnings</DropdownItem>
              <DropdownDivider />
              <DropdownItem>Sign out</DropdownItem>
            </Dropdown>

            <NavbarToggle />
          </div>

          {/* MENU */}
          <NavbarCollapse className="md:flex md:items-center md:gap-8 md:rounded-full md:bg-white/10 md:px-6 md:py-2 md:backdrop-blur">
            {["Home", "About", "Services", "Pricing", "Contact"].map(
              (item) => (
                <NavbarLink
                  key={item}
                  href="#"
                  className="text-white hover:text-blue-300"
                >
                  {item}
                </NavbarLink>
              )
            )}
          </NavbarCollapse>

        </div>
      </Navbar>
    </header>
  );
}
