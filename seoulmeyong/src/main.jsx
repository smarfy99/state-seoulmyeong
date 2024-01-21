import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//얼마나 캐시시킬거냐
//이 기간동안에는 api호출에도 캐시된걸 가져와
//infinity가능
const queryClient = new QueryClient({ stateTime: Infinity });

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>,
);
