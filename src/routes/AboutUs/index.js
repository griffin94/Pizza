import React from 'react';
import cs from './src/AboutUs.module.scss';
import { cx } from 'utils';
import { AboutCarousel } from 'components';

const Home = () => {
  return (
    <div className={cx(cs.container)}>
      <AboutCarousel />
    </div>
  );
};

export default Home;
