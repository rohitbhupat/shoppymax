import React, { useState } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Sidebar from './common/Sidebar';

const Layout = ({ children }) => {
    const [adminName, setAdminName] = useState('');
  return (
    <div className="flex flex-col min-h-screen">
      <Header adminName={adminName}/>
      <div className="flex flex-1 pt-12">
        <Sidebar />
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
