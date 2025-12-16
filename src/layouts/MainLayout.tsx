import {NavLink} from "react-router-dom";
import "./MainLayout.css";
import type {PropsWithChildren} from "react";

const navItems = [
  {to: "/home", label: "Home", icon: "🏠"},
  {to: "/activity", label: "Activity", icon: "🎯"},
  {to: "/promotion", label: "Promotion", icon: "🎁"},
  {to: "/wallet", label: "Wallet", icon: "👛"},
  {to: "/mian", label: "Account", icon: "🙂"}
];

function MainLayout({children}: PropsWithChildren) {
  return (
    <div className="layout">
      <main className="content">{children}</main>
      <nav className="tabbar">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({isActive}) => (isActive ? "tabbar__item active" : "tabbar__item")}
          >
            <span className="icon" aria-hidden>
              {item.icon}
            </span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default MainLayout;

