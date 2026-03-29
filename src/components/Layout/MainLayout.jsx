// src/components/Layout/MainLayout.jsx
import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

// 1. Import Component vừa tạo
import FloatingButtons from './FloatingButtons'; 

const MainLayout = ({ children }) => {
  return (
    <div className="app-container relative">
      <Header />
      <Navbar />
      
      {/* Nội dung chính của các trang sẽ render ở đây */}
      <main className="min-h-screen">
        {children}
      </main>
      
      <Footer />

      {/* 2. Đặt cụm nút trượt vào đây. 
          Vì nó nằm trong MainLayout nên trang nào cũng sẽ thấy. */}
      <FloatingButtons />
      
    </div>
  );
};

export default MainLayout;