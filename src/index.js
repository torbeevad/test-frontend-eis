import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RootStore from "./stores";
// import {spy} from "mobx";

// spy((e) => {
//     if (e.type === "action") {
//         console.log(e)
//     }
// })

const store = RootStore.create({})

export const StoreContext = createContext(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>
);