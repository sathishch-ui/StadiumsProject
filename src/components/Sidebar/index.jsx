import React from "react";
import { NavLink } from "react-router";
import { menuItems } from "../../utils/menuItem";
import Logo from "../Logo";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 p-4 h-screen text-white">
      <div className="mb-4 display-flex justify-center items-center">
        <Logo />
      </div>
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive }) =>
              `block p-2 rounded ${
                isActive ? "bg-yellow-500" : "hover:bg-yellow-400"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
