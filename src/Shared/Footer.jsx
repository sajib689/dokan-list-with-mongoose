import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company Info</h4>
            <p className="text-sm">
              We are a leading company in providing services for various domains. Our mission is to help our clients grow by offering outstanding service.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/dokan-list" className="hover:underline">Dokan List</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/login" className="hover:underline">Login</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="font-bold">Phone:</span> +123-456-7890</li>
              <li><span className="font-bold">Email:</span> support@company.com</li>
              <li><span className="font-bold">Address:</span> 123 Main Street, City, Country</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex items-center justify-between">
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-6 h-6 text-white hover:text-gray-400"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.595 0 0 .594 0 1.326v21.348C0 23.407.595 24 1.325 24H12.82v-9.293H9.692v-3.622h3.127V8.41c0-3.097 1.894-4.788 4.662-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.916.001c-1.502 0-1.793.714-1.793 1.76v2.308h3.588l-.467 3.622h-3.12V24h6.117c.73 0 1.324-.593 1.324-1.326V1.326C24 .594 23.405 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-6 h-6 text-white hover:text-gray-400"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.827 9.827 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.866 9.866 0 0 1-3.127 1.194 4.925 4.925 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149a4.925 4.925 0 0 0 1.523 6.574 4.904 4.904 0 0 1-2.229-.616v.061a4.928 4.928 0 0 0 3.95 4.827 4.931 4.931 0 0 1-2.224.085 4.928 4.928 0 0 0 4.598 3.417 9.876 9.876 0 0 1-6.1 2.103c-.396 0-.788-.023-1.176-.068A13.935 13.935 0 0 0 7.548 21c9.058 0 14.009-7.507 14.009-14.009 0-.213-.004-.426-.014-.637A9.987 9.987 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-6 h-6 text-white hover:text-gray-400"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.057 1.95.24 2.408.407a4.83 4.83 0 0 1 1.688 1.093 4.828 4.828 0 0 1 1.094 1.687c.168.46.35 1.238.408 2.41.057 1.264.07 1.643.07 4.847s-.012 3.583-.07 4.848c-.057 1.17-.24 1.95-.407 2.408a4.83 4.83 0 0 1-1.093 1.688 4.828 4.828 0 0 1-1.687 1.094c-.46.168-1.238.35-2.41.408-1.264.057-1.644.07-4.847.07s-3.583-.012-4.848-.07c-1.17-.057-1.95-.24-2.408-.407a4.83 4.83 0 0 1-1.688-1.093 4.828 4.828 0 0 1-1.094-1.687c-.168-.46-.35-1.238-.407-2.41-.057-1.264-.07-1.644-.07-4.847s.012-3.583.07-4.848c.057-1.17.24-1.95.407-2.408A4.83 4.83 0 0 1 4.44 2.56a4.828 4.828 0 0 1 1.687-1.094c.46-.168 1.238-.35 2.41-.408 1.264-.057 1.644-.07 4.847-.07m0-2.163C8.755 0 8.33.014 7.054.07 5.782.128 4.87.34 4.132.599 3.357.876 2.715 1.3 2.074 1.941c-.64.64-1.065 1.282-1.342 2.057-.258.738-.471 1.65-.53 2.922C.014 8.331 0 8.755 0 12c0 3.245.014 3.67.07 4.945.059 1.273.271 2.184.53 2.922.277.775.702 1.417 1.342 2.057.64.64 1.282 1.065 2.057 1.342.738.258 1.65.471 2.922.53 1.276.056 1.7.07 4.946.07s3.67-.014 4.945-.07c1.273-.059 2.184-.271 2.922-.53.775-.277 1.417-.702 2.057-1.342.64-.64 1.065-1.282 1.342-2.057.258-.738.471-1.65.53-2.922.056-1.276.07-1.7.07-4.945s-.014-3.67-.07-4.945c-.059-1.273-.271-2.184-.53-2.922-.277-.775-.702-1.417-1.342-2.057-.64-.64-1.282-1.065-2.057-1.342-.738-.258-1.65-.471-2.922-.53C15.67.014 15.245 0 12 0z" />
                  <circle cx="12" cy="12" r="3.643" />
                </svg>
              </a>
            </div>
            
            {/* Copyright */}
            <p className="text-sm">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
