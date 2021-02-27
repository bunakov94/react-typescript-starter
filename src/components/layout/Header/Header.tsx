import React from 'react';
import SomeBlock from '../../blocks/SomeBlock';

import style from './Header.module.scss';

const Header: React.FC = () => (
  <header>
    <h1 className={style.header}>Hello from Header</h1>
    <SomeBlock />
  </header>
);

export default Header;
