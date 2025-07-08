import { Link } from 'react-router-dom';
import { footerNavigation, companyInfo } from '../../data';

const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="container-responsive section-container-padding">
        <div className="footer-grid">
          {/* About Section */}
          <div>
            <h3 className="footer-heading">About {companyInfo.name}</h3>
            <p className="text-secondary-400">
              {companyInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="space-y-2">
              {footerNavigation.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link className="footer-link" to={link.path}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="space-y-2 text-secondary-400">
              <li className="flex items-start">
                <span className="material-icons mr-2 text-sm mt-1">location_on</span>
                {companyInfo.contact.address}
              </li>
              <li className="icon-text">
                <span className="material-icons mr-2 text-sm">email</span>
                {companyInfo.contact.email}
              </li>
              <li className="icon-text">
                <span className="material-icons mr-2 text-sm">phone</span>
                {companyInfo.contact.phones[0]}
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="footer-heading">Follow Us</h3>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a
                className="footer-link"
                href="#"
                aria-label="LinkedIn"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>

              {/* Twitter */}
              <a
                className="footer-link"
                href="#"
                aria-label="Twitter"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.493 0 1.954.993 3.679 2.508 4.685-.923-.029-1.79-.283-2.55-.698v.058c0 2.727 1.94 5.003 4.509 5.522-.471.128-.968.196-1.48.196-.362 0-.712-.035-1.05-.102.715 2.236 2.783 3.868 5.237 3.914-1.927 1.508-4.357 2.408-6.99 2.408-.455 0-.904-.026-1.345-.079 2.492 1.602 5.455 2.533 8.64 2.533 10.375 0 16.054-8.596 16.054-16.054 0-.244-.006-.488-.017-.73A11.523 11.523 0 0024 4.557z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-secondary-700 pt-8 text-center text-secondary-400 text-sm">
          <p>© {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
