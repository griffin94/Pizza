import { Routes, Route } from 'react-router-dom';
import { DetailsContainer, MenuContainer } from './src/containers';
import { AboutUs } from './src/views';

const Pages = () => (
  <Routes>
    <Route path='/' element={<AboutUs />} />
    <Route path='/promocje' element={<AboutUs />} />
    <Route path='/menu'>
      <Route index element={<MenuContainer />} />
      <Route path=':id' element={<DetailsContainer />} />
    </Route>
    <Route path='/galeria' element={<AboutUs />} />
    <Route path='/kontakt' element={<AboutUs />} />
  </Routes>
);

export default Pages;
