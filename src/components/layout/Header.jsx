import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationItems, companyInfo } from '../../data';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary-500 text-white py-2 px-4 sm:px-6 lg:px-8">
        <div className="container-responsive flex justify-between items-center text-sm">
          <div className="icon-text">
            <span className="material-icons text-sm align-middle mr-1">verified</span>
            {companyInfo.certification}
          </div>
          <div className="icon-text space-x-4">
            {companyInfo.contact.phones.map((phone, index) => (
              <div key={index} className="icon-text">
                <span className="material-icons text-sm align-middle mr-1">call</span>
                {phone}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-responsive py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="icon-text">
          <img
            alt={`${companyInfo.name} Logo`}
            className="h-12"
            src={companyInfo.logo}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => {
            if (item.type === 'dropdown') {
              return (
                <div key={item.id} className="relative">
                  <div
                    className="flex items-center"
                    onMouseEnter={() => setIsProductsDropdownOpen(true)}
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className="nav-link"
                    >
                      {item.label}
                    </Link>
                    <button
                      className="nav-link ml-1 p-1"
                      onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                    >
                      <span className="material-icons text-sm">expand_more</span>
                    </button>
                  </div>
                  {isProductsDropdownOpen && (
                    <div
                      className="dropdown-menu"
                      onMouseEnter={() => setIsProductsDropdownOpen(true)}
                      onMouseLeave={() => setIsProductsDropdownOpen(false)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          to={child.path}
                          className="dropdown-item"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.id}
                to={item.path}
                className="nav-link"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-secondary-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <span className="material-icons">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            {navigationItems.map((item) => {
              if (item.type === 'dropdown') {
                return (
                  <div key={item.id}>
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        className="flex-1 py-2 text-secondary-700 hover:text-primary-500 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        className="py-2 px-2 text-secondary-700 hover:text-primary-500 font-medium"
                        onClick={toggleProductsDropdown}
                      >
                        <span className="material-icons text-sm">
                          {isProductsDropdownOpen ? 'expand_less' : 'expand_more'}
                        </span>
                      </button>
                    </div>
                    {isProductsDropdownOpen && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            to={child.path}
                            className="block py-1 text-secondary-600 hover:text-primary-500"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className="nav-link-mobile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
