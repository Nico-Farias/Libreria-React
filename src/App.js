import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import './App.scss';
import Carrusel from './components/carrusel';
import Footer from './components/footer';
import Secccion from './components/section';
import Navegacion from './components/nav';
import Main from './components/main';
import CartProvider from './Context/CartContext';
import Cart from './components/carrito/index';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
      <div className="App ">
        <CartProvider>
          <header>
            <Navegacion />
            <Carrusel />
            <Cart />
          </header>
          <main>


            <Main />


          </main>
          <section>
            <Secccion />
          </section>

          <footer>
            <Footer />
          </footer>
        </CartProvider>
      </div>
    </ThemeProvider>

  );
}

export default App;
