import '@Styles/index.css';
import { createRoot } from 'react-dom/client';
import App from '@Pages/_app';

const container = document.getElementById('root') as HTMLElement;
createRoot(container).render(<App />);
