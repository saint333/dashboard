export const menu = [
  {
		id: "inicio",
		title: "Inicio",
		type: "group",
		children: [
			{
				id: "inicio.dashboard",
				title: "Dashboard",
				type: "item",
				icon: "home",
				url: "/dashboard",
			}
		]
  },
  {
		id: "sistema",
		title: "Sistema Integral",
		type: "group",
		children: [
			{
				id: "sistema.ventas",
				title: "Menu Ventas",
				type: "collapse",
				icon: "local_mall",
				children:[
					{
						id: "sistema.ventas.rapida",
						title: "Venta Rapida",
						type: "item",
						url: "/dashboard/sales/quick",
					},
					{
						id: "sistema.compras.consulta",
						title: "Consulta de Ventas",
						type: "item",
						url: "/dashboard/sales/consult",
					},
					{
						id: "sistema.vemtas.guia",
						title: "Guia de Remision",
						type: "item",
						url: "/dashboard/sales/guide",
					}
				]
			},
			{
				id: "sistema.compras",
				title: "Menu Compras",
				type: "collapse",
				icon: "local_shipping",
				children:[
					{
						id: "sistema.compras.rapida",
						title: "Compras Rapidas",
						type: "item",
						url: "/dashboard/purchases/quick",
					}
				]
			},
			{
				id: "sistema.gestion",
				title: "Menu Gestion",
				type: "collapse",
				icon: "pie_chart",
				children:[
					{
						id: "sistema.gestion.ingreso",
						title: "Ingreso de Productos",
						type: "item",
						url: "/dashboard/management/entry",
					},
					{
						id: "sistema.gestion.exhibicion",
						title: "Separacion para Exhibicion",
						type: "item",
						url: "/dashboard/management/exhibition",
					},
					{
						id: "sistema.gestion.productos",
						title: "Kardex de productos",
						type: "item",
						url: "/dashboard/management/products",
					}
				]
			},
			{
				id: "sistema.mantenimiento",
				title: "Mantenimiento",
				type: "collapse",
				icon: "settings",
				children:[
					{
						id: "sistema.mantenimiento.almacen",
						title: "Productos o Servicios",
						type: "item",
						url: "/dashboard/maintenance/products",
					},
					{
						id: "sistema.mantenimiento.clientes",
						title: "Clientes General",
						type: "collapse",
						children:[
							{
								id: "sistema.mantenimiento.clientes.list",
								title: "Clientes",
								type: "item",
								url: "/dashboard/maintenance/client/list",
							},
							{
								id: "sistema.mantenimiento.clientes.license",
								title: "Licencia",
								type: "item",
								url: "/dashboard/maintenance/client/license",
							},
							{
								id: "sistema.mantenimiento.clientes.card",
								title: "Tarjeta",
								type: "item",
								url: "/dashboard/maintenance/client/card",
							},
							{
								id: "sistema.mantenimiento.clientes.resolution",
								title: "Resolucion",
								type: "item",
								url: "/dashboard/maintenance/client/resolution",
							}
						]
					},
					{
						id: "sistema.mantenimiento.proveedores",
						title: "Proveedores",
						type: "item",
						url: "/dashboard/maintenance/suppliers",
					}
				]
			}
		]
	},
];
