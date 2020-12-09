import {Store} from './store';

export const ldlc: Store = {
	labels: {
		inStock: {
			container: 'a.button.picto.color2.noMarge.add-to-cart',
			text: ['']
		},
		maxPrice: {
			container: '#activeOffer > div.product-info > div.wrap-aside > aside > div.price',
			euroFormat: true
		},
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.ldlc.com/fiche/PB00276527.html'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3080',
			url:
				'https://www.ldlc.com/fiche/PB00276527.html'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3060ti',
			url:
				'https://www.ldlc.com/fiche/PB00394371.html'
		},
	],
	name: 'ldlc'
};
