import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Analytics } from '@vercel/analytics/react'; // ✅ add this line

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics /> {/* ✅ Add the Analytics component here */}

  </StrictMode>
);
