import { Link, useLocation } from "react-router-dom";
import { useState } from "react";


export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <i className="fa-solid fa-shield-virus text-blue-600 text-2xl"></i>
              <span className="text-xl font-semibold text-gray-800">STD Risk Calculator</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/calculator"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/calculator') 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'} transition-colors`}
            >
              Full Assessment
            </Link>
            
            <div className="relative group">
              <Link
                to="/education"
                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/education') 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'} transition-colors`}
              >
                Education Hub
                <i className="fa-solid fa-chevron-down ml-1 text-xs"></i>
              </Link>
              
              <div className="absolute left-0 mt-2 w-56 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <div className="py-1">
                  <Link
                    to="/education/hiv"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    HIV/AIDS
                  </Link>
                  <Link
                    to="/education/chlamydia"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Chlamydia
                  </Link>
                  <Link
                    to="/education/gonorrhea"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Gonorrhea
                  </Link>
                  <Link
                    to="/education/hpv"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    HPV
                  </Link>
                  <Link
                    to="/education/hepatitis"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Hepatitis
                  </Link>
                  <Link
                    to="/education/trichomoniasis"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Trichomoniasis
                  </Link>
                </div>
              </div>
            </div>
            

          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <Link
            to="/calculator"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/calculator') 
              ? 'bg-blue-100 text-blue-700' 
              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'} transition-colors`}
          >
            Full Assessment
          </Link>
          
          <div className="relative">
            <Link
              to="/education"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/education') 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'} transition-colors`}
            >
              Education Hub
            </Link>
            
            <div className="pl-4 mt-1 space-y-1">
              <Link
                to="/education/hiv"
                className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-blue-50"
              >
                HIV/AIDS
              </Link>
              <Link
                to="/education/chlamydia"
                className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-blue-50"
              >
                Chlamydia
              </Link>
              <Link
                to="/education/gonorrhea"
                className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-blue-50"
              >
                Gonorrhea
              </Link>
              <Link
                to="/education/hpv"
                className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-blue-50"
              >
                HPV
              </Link>
              <Link
                to="/education/hepatitis"
                className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-blue-50"
              >
                Hepatitis
              </Link>
              <Link
                to="/education/trichomoniasis"
                className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-blue-50"
              >
                Trichomoniasis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}