import React from 'react';
import { Navbar } from './shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { ProductList } from './components/productList/ProductList';
import { ProductDetails } from './components/productList/ProductDetails'
import { Provider } from "react-redux";
import store from './store/Store';
import { Registeration } from './components/forms/Registeration';
import { Login } from './components/forms/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Order } from './components/forms/Order';
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>

      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductList />} exact />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/register' element={<Registeration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/order' element={<Order />} />
        </Routes>
        <ReactQueryDevtools position='bottom-right' initialIsOpen={false} />
      </Provider>
      <ToastContainer position='top-right' autoClose={4000} />
    </QueryClientProvider>
  );
}

export default App;
