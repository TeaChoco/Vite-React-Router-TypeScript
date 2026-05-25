// -Path: 'Vite-React-Router-TypeScript/app/entry.client.tsx'
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import { startTransition, StrictMode } from 'react';
import Providers from './components/layout/Providers';

startTransition(() => {
    hydrateRoot(
        document,
        <StrictMode>
            <Providers>
                <HydratedRouter />
            </Providers>
        </StrictMode>,
    );
});
