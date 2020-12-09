import {Store} from './store';

export const ldlc: Store = {
	labels: {
		inStock: {
			container: 'a.button.picto.color2.noMarge.add-to-cart',
			text: ['']
		},
		maxPrice: {
			container: 'div.price',
			euroFormat: false
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
			series: '3060ti',
			url:
				'https://www.ldlc.com/fiche/PB00394371.html'
		},
    	{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3080',
			url:
				'https://www.ldlc.com/fiche/PB00348022.html'
		},
	],
	name: 'ldlc'
};
