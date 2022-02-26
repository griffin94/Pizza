import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import AboutUs from './AboutUs';

export const routes = [
  {
    id: 0,
    path: '/',
    linkName: 'O nas',
    Component: () => <AboutUs />,
  },
  {
    id: 1,
    path: '/promocje',
    linkName: 'Promocje',
    Component() {
      return <div>Promocje</div>;
    },
  },
  {
    id: 2,
    path: '/menu',
    linkName: 'Menu',
    Component: () => <Menu />
  },
  {
    id: 3,
    path: '/galeria',
    linkName: 'Galeria',
    Component() {
      return <div>Galeria</div>;
    },
  },
  {
    id: 4,
    path: '/kontakt',
    linkName: 'Kontakt',
    Component() {
      return <div>Kontakt</div>;
    },
  },
];

const Pages = () => (
  <Routes>
    {routes &&
      routes.map(({ Component, id, path }) => (
        <Route key={id} path={path} element={<Component />} />
      ))}
  </Routes>
);

export default Pages;
