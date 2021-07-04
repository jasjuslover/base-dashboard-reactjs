import React, { useState, useMemo, createContext } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
  const [isPagesMenuOpen, setisPagesMenuOpen] = useState(false);
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  function togglePagesMenu() {
    setisPagesMenuOpen(!isPagesMenuOpen);
  }

  function toggleSideMenu() {
    setisSideMenuOpen(!isSideMenuOpen);
  }

  function toggleNotificationsMenu() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  function toggleProfileMenu() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  const value = useMemo(
    () => ({
      isSideMenuOpen,
      isPagesMenuOpen,
      isNotificationsMenuOpen,
      isProfileMenuOpen,
      togglePagesMenu,
      toggleSideMenu,
      toggleNotificationsMenu,
      toggleProfileMenu,
    }),
    [isSideMenuOpen, isPagesMenuOpen, isNotificationsMenuOpen, isProfileMenuOpen]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}