import React from 'react';
import { Navbar } from './shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { ProductList } from './components/productList/ProductList';
import { ProductDetails } from './components/productList/ProductDetails'
import { Provider } from "react-redux";
import store from './store/Store';
import { Cart } from './components/cart/Cart';

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
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <ReactQueryDevtools position='bottom-right' initialIsOpen={false} />
      </Provider>

    </QueryClientProvider>
  );
}

export default App;
