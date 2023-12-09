import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Registration from './pages/Registration';

const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(<Registration/>);
