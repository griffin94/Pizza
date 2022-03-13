import React from 'react';
import { ControlPanel, Nav } from 'components';
import { cx } from 'utils';
import cs from './Header.module.scss';

const Header = () => {
  return (
    <header className={cx(cs.container)}>
      <Nav>
        <Nav.Link path='/'>O nas</Nav.Link>
        <Nav.Link path='/promocje'>Promocje</Nav.Link>
        <Nav.Link path='/menu'>Menu</Nav.Link>
        <Nav.Link path='/galeria'>Galeria</Nav.Link>
        <Nav.Link path='/kontakt'>Kontakt</Nav.Link>
      </Nav>
      <ControlPanel />
    </header>
  );
};

export default Header;
