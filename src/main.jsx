import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router';
import { Fallback } from '@/components';
import App from '@/App';
import '@/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={Fallback}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
