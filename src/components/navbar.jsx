
"use client";

import { Navbar } from "flowbite-react";

export function Navbar1() {
  return (
    <Navbar fluid rounded className="bg-transparent">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Zaid</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-white" aria-current="page">
          Home
        </Navbar.Link>
        <Navbar.Link href="#about" className="text-white">
          About Me
        </Navbar.Link>
        <Navbar.Link href="#contact" className="text-white">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navbar1;