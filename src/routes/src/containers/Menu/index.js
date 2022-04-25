import { Routes, Route } from 'react-router-dom';
import Details from './src/Details';
import Menu from './src/Menu';

export default () => (
  <Routes>
    <Route index element={<Menu />} />
    <Route path=':id' element={<Details />} />
  </Routes>
);
