import { Routes, Route } from 'react-router-dom';
import { DetailsContainer, MenuContainer } from './src/containers';
import { AboutUs, Cart } from './src/views';

export const ROUTES = Object.freeze({
  CART: '/koszyk',
  CONTACT: '/kontakt',
  GALLERY: '/galeria',
  ID: ':id',
  MAIN: '/',
  MENU: '/menu',
  SALE: '/promocje'
})

const Pages = () => (
  <Routes>
    <Route path={ROUTES.MAIN} element={<AboutUs />} />
    <Route path={ROUTES.SALE} element={<AboutUs />} />
    <Route path={ROUTES.MENU}>
      <Route index element={<MenuContainer />} />
      <Route path={ROUTES.ID} element={<DetailsContainer />} />
    </Route>
    <Route path={ROUTES.GALLERY} element={<AboutUs />} />
    <Route path={ROUTES.CONTACT} element={<AboutUs />} />
    <Route path={ROUTES.CART} element={<Cart />} />
  </Routes>
);

export default Pages;
