export const menu = [
  {
    type: "label",
    text: "Inicio",
  },
  {
    type: "item",
    text: "Dashboard",
    icon: "D",
    link: "/dashboard",
  },
  {
    type: "label",
    text: "Sistema Integral",
  },
  {
    type: "group",
    text: "Menu Ventas",
    icon: "V",
    children: [
      {
        type: "item",
        text: "Dashboard",
        icon: "D",
        link: "/dashboard/assafs",
      },
    ],
  },
  {
    type: "group",
    text: "Menu Compras",
    icon: "V",
    children: [
      {
        type: "item",
        text: "Dashboard",
        icon: "D",
        link: "/dashboard",
      },
    ],
  },
  {
    type: "label",
    text: "E-commerce",
  },
  {
    type: "group",
    text: "Tienda Web",
    icon: "V",
    children: [
      {
        type: "item",
        text: "Dashboard",
        icon: "D",
        link: "/dashboard",
      },
    ],
  },
  {
    type: "group",
    text: "Ayuda",
    icon: "V",
    children: [
      {
        type: "item",
        text: "Dashboard",
        icon: "D",
        link: "/dashboard",
      },
    ],
  },
];
