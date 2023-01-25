import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" prefetch={false}>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/about" prefetch={false}>
            <p>About</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
