import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './components/Pages/Shop'
import Product from './components/Pages/Product'
import ShopCategory from './components/Pages/ShopCategory'
import LoginSignUp from './components/Pages/LoginSignUp'
import Cart from './components/Pages/Cart'
import Footer from './components/Footer'
import banner_mens from '../src/assets/banner_mens.png'
import banner_women from '../src/assets/banner_women.png'
import banner_kids from '../src/assets/banner_kids.png'
import PageWrapper from './components/PageWrapper'
import SignUp from './components/Pages/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Shop />
            </PageWrapper>
          }
        ></Route>
        <Route
          path="/product"
          element={
            <PageWrapper>
              {' '}
              <Product />{' '}
            </PageWrapper>
          }
        >
          <Route
            path=":productId"
            element={
              <PageWrapper>
                {' '}
                <Product />{' '}
              </PageWrapper>
            }
          ></Route>
        </Route>

        <Route
          path="/mens"
          element={
            <PageWrapper>
              {' '}
              <ShopCategory category={'men'} banner={banner_mens} />{' '}
            </PageWrapper>
          }
        >
          {' '}
        </Route>
        <Route
          path="/womens"
          element={
            <PageWrapper>
              {' '}
              <ShopCategory category={'women'} banner={banner_women} />{' '}
            </PageWrapper>
          }
        ></Route>
        <Route
          path="/kids"
          element={
            <PageWrapper>
              <ShopCategory category={'kid'} banner={banner_kids} />
            </PageWrapper>
          }
        ></Route>

        <Route
          path="/login"
          element={
            <PageWrapper>
              <LoginSignUp />
            </PageWrapper>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <PageWrapper>
              <SignUp />
            </PageWrapper>
          }
        />
        <Route
          path="/cart"
          element={
            <PageWrapper>
              <Cart />
            </PageWrapper>
          }
        ></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
