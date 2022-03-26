import { Routes, Route } from 'react-router-dom';
import { Details, Dishes } from 'components';
import useMenu from '../../api/Menu';

const Menu = () =>
  ((props) => (
    <Routes>
      <Route index element={<Dishes {...props} />} />
      <Route path=':category/:name' element={<Details {...props} />} />
    </Routes>
  ))(useMenu());

export default Menu;