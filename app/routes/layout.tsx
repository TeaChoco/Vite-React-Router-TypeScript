//-Path: 'Vite-React-Router-TypeScript/app/routes/Layout.tsx'
import { Outlet } from 'react-router';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ErrorBoundaryProvider } from '../components/custom/ErrorBound';

export default function Layout() {
    return (
        <div className='flex flex-col min-h-dvh overflow-auto'>
            <ErrorBoundaryProvider />
            <Navbar />
            <main className='flex-1'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
