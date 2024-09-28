import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; 
import store from './store';
import App from './App.jsx'
import './index.css'
AOS.init();

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    </Provider>,
)
