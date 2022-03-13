import { Routes, Route } from 'react-router-dom';
import { Details, Dishes } from 'components';
import useMenu from 'routes/src/api/Menu';

const Menu = () =>
  (({ data, error, loading }) => (
    <>
      <Routes>
        <Route index element={<Dishes data={data} />} />
        <Route path=':category/:name' element={<Details data={data} />} />
      </Routes>
    </>
  ))(useMenu());

export default Menu;