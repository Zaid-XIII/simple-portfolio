
"use client";

import { Navbar } from "flowbite-react";

export function Navbar1() {
  return (
    <Navbar fluid rounded className="bg-transparent">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Zaid</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Navbar.Link href="#" className="text-white">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">
          About Me
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navbar1;