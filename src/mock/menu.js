export const menu = [
  {
    id: "prueba",
    icon: "home",
    title: "Prueba",
    type: "item",
    url: "/prueba",
  },
  {
    id: 'dashboards.project',
    title: 'Project',
    type: 'collapse',
    icon: 'clipboard-check',
    url: '/dashboards/project'
  },
	{
		id: 'dashboards',
		title: 'Dashboards',
		type: 'group',
		icon: 'home',
		children: [
			{
				id: 'dashboards.project',
				title: 'Project',
				type: 'item',
				icon: 'clipboard-check',
				url: '/dashboards/project'
			},
			{
				id: 'dashboards.analytics',
				title: 'Analytics',
				type: 'item',
				icon: 'chart-pie',
				url: '/dashboards/analytics'
			},
			{
				id: 'dashboards.finance',
				title: 'Finance',
				type: 'item',
				icon: 'cash',
				url: '/dashboards/finance'
			},
			{
				id: 'dashboards.crypto',
				title: 'Crypto',
				type: 'item',
				icon: 'currency-dollar',
				url: '/dashboards/crypto'
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
