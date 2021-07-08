'use strict';

import React, { useContext } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { SidebarContext } from '../../context/SidebarContext';

export default function DashboardLayout() {
  const { isSideMenuOpen } = useContext(SidebarContext);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSideMenuOpen ? 'overflow-hidden' : ''
      }`}
    >
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <main className="h-full overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Dashboard
            </h2>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
