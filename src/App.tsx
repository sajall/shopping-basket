  import React from 'react';
  import logo from './logo.svg';
  import './App.css';
  import Product from './components/Products/Product';
  import { GlobalStyle } from './components/Products/StyleDComponents';
  import Basket from './components/Basket/Basket';

  const App:React.FC = ()=> {
    return (
      <div className="App">
      <Product/>
      <GlobalStyle />

            <Basket/>
      </div>
    );
  }

  export default App;
