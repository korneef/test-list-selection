import React from 'react';
import { Header } from 'components';
import { Outlet } from 'react-router-dom';

function HeaderLayout() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>

  );
}

export default HeaderLayout;
