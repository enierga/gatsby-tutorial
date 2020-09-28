import React from 'react';
import Nav from '../components/Nav';
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}