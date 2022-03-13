import { Routes, Route } from 'react-router-dom';
import { AboutUs, Menu } from './src/containers';

const Pages = () => (
	<Routes>
		<Route path='/' element={<AboutUs />} />
		<Route path='/promocje' element={<AboutUs />} />
		<Route path='/menu/*' element={<Menu />} />
		<Route path='/galeria' element={<AboutUs />} />
		<Route path='/kontakt' element={<AboutUs />} />
	</Routes>
);

export default Pages;
