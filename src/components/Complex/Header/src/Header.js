import React from 'react';
import { ControlPanel, Nav } from 'components';
import { cx } from 'utils';
import cs from './Header.module.scss';
import { ROUTES } from 'routes/src/constans';

const Header = () => {
  return (
    <header className={cx(cs.container)}>
      <Nav>
        <Nav.Link path={ROUTES.MAIN}>O nas</Nav.Link>
        <Nav.Link path={ROUTES.SALE}>Promocje</Nav.Link>
        <Nav.Link path={ROUTES.MENU}>Menu</Nav.Link>
        <Nav.Link path={ROUTES.GALLERY}>Galeria</Nav.Link>
        <Nav.Link path={ROUTES.CONTACT}>Kontakt</Nav.Link>
      </Nav>
      <ControlPanel />
    </header>
  );
};

export default Header;
