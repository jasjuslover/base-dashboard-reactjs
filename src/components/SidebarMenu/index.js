'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default function SidebarMenu({ menu, route, icon }) {
  return (
    <ul className={`${route.mt ? 'mt-6' : ''}`}>
      <li className="relative px-6 py-3">
        {route.isCurrentRoute && (
          <span
            className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
            aria-hidden="true"
          ></span>
        )}
        <a
          className={`inline-flex items-center font-semibold text-gray-500 w-full text-sm transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100 ${
            route.isCurrentRoute ? 'text-gray-800' : ''
          }`}
          href={route.path}
        >
          {icon}
          <span className="ml-4">{menu}</span>
        </a>
      </li>
    </ul>
  );
}

SidebarMenu.propTypes = {
  menu: PropTypes.string.isRequired,
  route: PropTypes.object.isRequired,
  icon: PropTypes.element.isRequired
};
