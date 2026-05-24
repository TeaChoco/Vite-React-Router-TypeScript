// -Path: 'Vite-React-Router-TypeScript/app/routes.ts'
import { type RouteConfig, layout, index, route } from '@react-router/dev/routes';

export default [
    route(':lang', 'routes/$lang.tsx', [
        layout('routes/layout.tsx', [
            index('routes/page/home.tsx'),
            route('about', 'routes/page/about.tsx'),
            route('auth', 'routes/page/auth.tsx'),
            route('socket', 'routes/page/socket.tsx'),
            route('threejs', 'routes/page/threejs.tsx'),
            route('*', 'routes/not-found.tsx'),
        ]),
    ]),
] satisfies RouteConfig;
