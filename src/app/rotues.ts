export const routes: Array<IRoutes> = [
    {
        path: '/',
        display: 'Home',
    },
    {
        path: '/about',
        display: 'About',
    },
];

export interface IRoutes {
    path: string;
    display: string;
}