import Link from "next/link";
import React from "react";
import Logo from "../../public/dojo-logo.png";
import Image from "next/image";
function Navbar() {
  return (
    <nav className="nav">
      <Image src={Logo} width={70} quality={100} placeholder="blur"/>
      <h1>Navbar test</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}

export default Navbar;
