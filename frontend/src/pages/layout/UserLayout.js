import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';

export const UserLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
