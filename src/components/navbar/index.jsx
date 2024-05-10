"use client";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import { useMenuProvider } from "@/context/menu/MenuContext";
import { menuCase } from "@/context/common/MenuConstants";
import Image from "next/image";
import { menu } from "@/mock/menu";
import { useRouter } from "next/navigation";

const MenuItems = (menu, collapsed) => {
  const router = useRouter();
  return menu.map((item, index) => {
    return (
      <div key={index}>
        {item.type === "label" && (
          <div
            key={index + item.text}
            className={`py-3 px-8 ${collapsed ? "hidden" : "block"}
        `}
          >
            <p className='text-gray-500'>{item.text}</p>
          </div>
        )}
        {item.type === "item" && (
          <MenuItem
            key={index + item.text}
            icon={item.icon}
            onClick={() => router.push(item.link)}
          >
            {item.text}
          </MenuItem>
        )}
        {item.type === "group" && (
          <SubMenu
            key={index + item.text}
            icon={item.icon}
            label={item.text}
            // onClick={() => dispatch({ type: menuCase.TOGGLED })}
          >
            {MenuItems(item.children, collapsed)}
          </SubMenu>
        )}
      </div>
    );
  })
}

function Navbar() {
  const [{ collapsed, toggled }, dispatch] = useMenuProvider();
  return (
    <Sidebar
      collapsed={collapsed}
      toggled={!toggled}
      transitionDuration={1000}
      breakPoint='md'
      backgroundColor='#fefefe'
      onBreakPoint={(broken) => {
        if (broken) {
          dispatch({ type: menuCase.ALL, toggled: true, collapsed: false });
        } else {
          dispatch({ type: menuCase.ALL, collapsed: false, toggled: false });
        }
      }}
      // onMouseEnter={() => !toggled && dispatch({ type: menuCase.COLLAPSED })}
      onBackdropClick={() => dispatch({ type: menuCase.TOGGLED })}
      rootStyles={{
        color: "#282f53",
      }}
    >
      <div className='py-2 border-b border-gray-400'>
        {collapsed ? (
          <Image
            src='/icons/icon-lina-dark.png'
            alt='logo'
            width={50}
            height={50}
            priority
            className='m-auto'
          />
        ) : (
          <Image
            src='/icons/logo.png'
            alt='logo'
            width={200}
            height={50}
            priority
            className='m-auto'
          />
        )}
      </div>
      <Menu transitionDuration={1000}>
        {MenuItems(menu, collapsed)}
      </Menu>
    </Sidebar>
  );
}

export default Navbar;
