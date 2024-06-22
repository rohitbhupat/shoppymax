// Breadcrumbs.jsx
import React from 'react';
import { useTheme } from '../../ThemeProvider';

const Breadcrumbs = ({ items }) => {
  const { mode } = useTheme();

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav className={`bg-gray-100 text-gray-600 p-4 ${mode === 'dark' ? 'dark' : ''}`}>
      <div className="container mx-auto">
        <ol className="list-reset flex text-sm">
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="text-blue-500 hover:underline">
                {item.title}
              </a>
              {index < items.length - 1 && <span className="mx-2">/</span>}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
