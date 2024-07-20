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
	{
		id: 'dashboard',
		title: 'Dashboard',
		type: 'group',
		icon: 'home',
		children: [
			{
				id: 'dashboard.project',
				title: 'Project',
				type: 'item',
				icon: 'clipboard-check',
				url: '/dashboard/project'
			},
			{
				id: 'dashboard.analytics',
				title: 'Analytics',
				type: 'item',
				icon: 'chart-pie',
				url: '/dashboard/analytics'
			},
			{
				id: 'dashboard.finance',
				title: 'Finance',
				type: 'item',
				icon: 'cash',
				url: '/dashboard/finance'
			},
			{
				id: 'dashboard.crypto',
				title: 'Crypto',
				type: 'item',
				icon: 'currency-dollar',
				url: '/dashboard/crypto'
			}
		]
	},
	{
		id: 'apps',
		title: 'Applications',
		type: 'group',
		icon: 'cube',
		children: [
			{
				id: 'apps.academy',
				title: 'Academy',
				type: 'item',
				icon: 'academic-cap',
				url: '/apps/academy',
			},
			{
				id: 'apps.calendar',
				title: 'Calendar',
				type: 'item',
				icon: 'calendar',
				url: '/apps/calendar',
			},
			{
				id: 'apps.messenger',
				title: 'Messenger',
				type: 'item',
				icon: 'chat-alt',
				url: '/apps/messenger',				
			},
			{
				id: 'apps.contacts',
				title: 'Contacts',
				type: 'item',
				icon: 'user-group',
				url: '/apps/contacts',				
			},
			{
				id: 'apps.ecommerce',
				title: 'ECommerce',
				type: 'collapse',
				icon: 'shopping-cart',				
				children: [
					{
						id: 'e-commerce-products',
						title: 'Products',
						type: 'subitem',
						url: 'apps/e-commerce/products',
					},
					{
						id: 'e-commerce-product-detail',
						title: 'Product Detail',
						type: 'subitem',
						url: 'apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print'
					},
					{
						id: 'e-commerce-new-product',
						title: 'New Product',
						type: 'subitem',
						url: 'apps/e-commerce/products/new'
					},
					{
						id: 'e-commerce-orders',
						title: 'Orders',
						type: 'subitem',
						url: 'apps/e-commerce/orders',
					},
					{
						id: 'e-commerce-order-detail',
						title: 'Order Detail',
						type: 'subitem',
						url: 'apps/e-commerce/orders/1'
					}
				]
			},
			{
				id: 'apps.file-manager',
				title: 'File Manager',
				type: 'item',
				icon: 'cloud',
				url: '/apps/file-manager',
			},
			{
				id: 'apps.help-center',
				title: 'Help Center',
				type: 'collapse',
				icon: 'support',
				url: '/apps/help-center',
				children: [
					{
						id: 'apps.help-center.home',
						title: 'Home',
						type: 'subitem',
						url: '/apps/help-center',
					},
					{
						id: 'apps.help-center.faqs',
						title: 'FAQs',
						type: 'subitem',
						url: '/apps/help-center/faqs'
					},
					{
						id: 'apps.help-center.guides',
						title: 'Guides',
						type: 'subitem',
						url: '/apps/help-center/guides'
					},
					{
						id: 'apps.help-center.support',
						title: 'Support',
						type: 'subitem',
						url: '/apps/help-center/support'
					}
				]
			},
			{
				id: 'apps.mailbox',
				title: 'Mailbox',
				type: 'item',
				icon: 'mail',
				url: '/apps/mailbox',
				badge: {
					title: '27',
					classes: 'px-8 bg-pink-600 text-white rounded-full'
				}
			},
			{
				id: 'apps.notes',
				title: 'Notes',
				type: 'item',
				icon: 'pencil-alt',
				url: '/apps/notes',
			},
			{
				id: 'apps.scrumboard',
				title: 'Scrumboard',
				type: 'item',
				icon: 'view-boards',
				url: '/apps/scrumboard',
			},
			{
				id: 'apps.tasks',
				title: 'Tasks',
				type: 'item',
				icon: 'check-circle',
				url: '/apps/tasks',
			},
			{
				id: 'apps.profile',
				title: 'Profile',
				type: 'item',
				icon: 'user-circle',
				url: '/apps/profile'
			},
			{
				id: 'apps.notifications',
				title: 'Notifications',
				type: 'item',
				icon: 'bell',
				url: '/apps/notifications'
			}
		]
	},
];
