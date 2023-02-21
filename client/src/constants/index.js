
import { dashboard, account, create } from "../assets";

export const navlinks = [
	{
		name: 'dashboard',
		imgUrl: dashboard,
		link: '/',
		disabled: false,

	},
	{
		name: 'user',
		imgUrl: account,
		link: '/user',
		disabled: false,

	},
	{
		name: 'add',
		imgUrl: create,
		link: '/password',
		disabled: false,

	},
];