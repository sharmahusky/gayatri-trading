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
    <header className="bg-white shadow-lg border-b border-secondary-100">
      {/* Main Navigation - Enhanced styling for single-row layout */}
      <nav className="container-responsive py-4 flex justify-between items-center">
        {/* Logo Section - Enhanced for single-row layout */}
          <Link to="/" className="icon-text group">
            <img
              alt={`${companyInfo.name} Logo`}
              className="h-12 transition-transform duration-200 group-hover:scale-105"
              src={companyInfo.logo}
            />
          </Link>

        {/* Desktop Navigation - Enhanced styling */}
        <div className="hidden md:flex items-center space-x-6">
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

              // Enhanced styling for Contact Us link
              if (item.id === 'contact') {
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className="bg-primary-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary-600 transition-colors duration-200 shadow-sm hover:shadow-md"
                  >
                    {item.label}
                  </Link>
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

        {/* Mobile Menu Button - Enhanced styling */}
        <div className="md:hidden">
          <button
            className="text-secondary-700 hover:text-primary-500 focus:outline-none focus:text-primary-500 p-2 rounded-lg hover:bg-secondary-50 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="material-icons text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Enhanced styling */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-secondary-200 shadow-lg">
          <div className="container-responsive py-4 space-y-1">
            {navigationItems.map((item) => {
              if (item.type === 'dropdown') {
                return (
                  <div key={item.id}>
                    <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-secondary-50 transition-colors duration-200">
                      <Link
                        to={item.path}
                        className="flex-1 text-secondary-700 hover:text-primary-500 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        className="p-1 text-secondary-700 hover:text-primary-500 font-medium rounded transition-colors duration-200"
                        onClick={toggleProductsDropdown}
                      >
                        <span className="material-icons text-sm">
                          {isProductsDropdownOpen ? 'expand_less' : 'expand_more'}
                        </span>
                      </button>
                    </div>
                    {isProductsDropdownOpen && (
                      <div className="ml-4 mt-2 space-y-1 border-l-2 border-primary-100 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            to={child.path}
                            className="block py-2 px-3 text-secondary-600 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors duration-200"
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

              // Enhanced styling for Contact Us link in mobile
              if (item.id === 'contact') {
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className="block py-3 px-4 mt-2 bg-primary-500 text-white text-center font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200 shadow-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className="block py-3 px-3 text-secondary-700 hover:text-primary-500 font-medium rounded-lg hover:bg-secondary-50 transition-colors duration-200"
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
