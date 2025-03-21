import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<AuthProvider>
  <div className='bg-slate-100 text-black dark:bg-gray-900 dark:text-white'>
    <App/>
  </div>
</AuthProvider>
</BrowserRouter>,
);
