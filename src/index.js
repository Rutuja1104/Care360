import React from 'react'
import App from './App'
import store from './store/store'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'simplebar-react/dist/simplebar.min.css';
import 'react-toastify/dist/ReactToastify.css';

const globalStyles = {
    fontFamily: 'Roboto'
}

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET);
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <BrowserRouter>
            {/* <Elements stripe={stripePromise}> */}
                <div style={globalStyles}>
                    <App />
                    <ToastContainer />
                </div>
            {/* </Elements> */}
        </BrowserRouter>
    </Provider>
)
