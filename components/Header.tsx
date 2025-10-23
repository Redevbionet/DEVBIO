
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MenuIcon, XIcon } from './icons';

const navLinks = [
  { to: '/', label: 'หน้าหลัก' },
  { to: '/about', label: 'เกี่ยวกับเรา' },
  { to: '/services', label: 'บริการ' },
  { to: '/case-studies', label: 'กรณีศึกษา' },
  { to: '/blog', label: 'บทความ' },
  { to: '/contact', label: 'ติดต่อเรา' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#06b6d4', // cyan-500
    textShadow: '0 0 5px #06b6d4',
  };

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-cyan-500/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white tracking-wider">
            Redevbio<span className="text-cyan-400">net</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="text-gray-300 hover:text-cyan-400 transition duration-300 font-medium"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                    className="block text-gray-300 hover:text-cyan-400 transition duration-300 font-medium"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
