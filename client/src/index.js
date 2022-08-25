import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext(null)
root.render(
	<React.StrictMode>
		<Context.Provider value={{
			user: new UserStore(),
			product: new ProductStore(),
		}}>
			<App/>
		</Context.Provider>
	</React.StrictMode>
);
