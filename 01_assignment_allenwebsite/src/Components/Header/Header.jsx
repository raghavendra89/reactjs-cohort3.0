import React from "react";
import {Link,NavLink} from "react-router-dom";
import React from "react";

import LogoutBtn from "./LogoutBtn";
import navItems from "./navItems";
import Container from "../Container/Container";

import Logo from "../../Reusables/reusable-imports";

export default function Header() {
    const authStatus=false;
  return (
    <Container>
      <header>
        <ul>
          {navItems.map((item) => {
            return (
              item.active && (
                  <NavLink key={item.slug} to={item.slug}>
                <li>
                  {item.name}
                </li>
                </NavLink>
              )
            );
          })}
          {authStatus && <li><LogoutBtn /></li>}
        </ul>
      </header>
    </Container>
  );
}

