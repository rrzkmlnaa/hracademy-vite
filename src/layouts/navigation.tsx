import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GrLanguage, GrSearch } from "react-icons/gr";
import { navigations } from 'constant/navigations';
import { classNames } from 'utils';

const Dropdown = ({ name, children, path }) => {
  return (
    <div className="group inline-block dropdown">
      <Link
        to={path ?? '#!'}
        className="flex w-fit items-center rounded-sm px-3 py-1 outline-none focus:outline-none"
      >
        <span className="flex-1 pr-1 text-primary text-[16px]">{name}</span>
        {children && (
          <span>
            <svg
              className="size-4 fill-current transition duration-150 ease-in-out group-hover:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        )}
      </Link>
      <ul className="absolute min-w-32 origin-top scale-0 rounded-sm border bg-white transition duration-150 ease-in-out group-hover:scale-100">
        {children?.map((childItem) => {
          if (!childItem.children) {
            return (
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100" key={childItem.name}>
                <Link to={childItem.path ?? '#!'} className="flex w-fit items-center rounded-sm px-3 py-1 outline-none focus:outline-none">
                  {childItem.name}
                </Link>
              </li>
            )
          }

          return (
            <li className="relative rounded-sm px-3 py-1 hover:bg-gray-100" key={childItem.name}>
              <Link to={childItem.path ?? '#!'} className="w-full text-left flex items-center px-3 py-1 outline-none focus:outline-none">
                <span className="pr-1 flex-1">{childItem.name}</span>
                <span className="mr-auto">
                  <svg className="fill-current size-4 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </Link>
              <ul className="absolute right-0 top-0 min-w-32 origin-top-left rounded-sm border bg-white transition duration-150 ease-in-out">
                {childItem.children.map((nestedChildItem) => (
                  <li className="px-3 py-1 hover:bg-gray-100" key={nestedChildItem.name}>
                    <Link to={nestedChildItem.path ?? '#!'} className="flex w-fit items-center rounded-sm px-3 py-1 outline-none focus:outline-none">
                      {nestedChildItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  const drawerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsMenuOpen(true);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Fungsi untuk mengecek apakah kita berada di halaman "About Us"
  const isAboutUsPage = location.pathname.startsWith('/informasi-training');

  return (
    <header className={classNames('bg-white py-3', scroll ? 'sticky-navbar shadow z-50' : null)}>
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-expanded={isMenuOpen}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <Link to="/" className="block text-teal-600">
          <span className="sr-only">Home</span>
          <img src="/images/appLogo.webp" width="160px" height="auto" alt="app-logo" />
        </Link>

        <div ref={drawerRef} className={`w-full md:block md:w-auto md:static fixed z-10 inset-0 top-[73px] transform ease-in-out transition-all ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <ul className="flex flex-col font-medium md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white">
            {navigations.map((navItem) => (
              <li key={navItem.name}>
                <Dropdown name={navItem.name} children={navItem.children} path={navItem.path} />
              </li>
            ))}
          </ul>
        </div>

        <div className=" md:flex items-center flex gap-5 ml-auto">
          <GrLanguage className="text-2xl cursor-pointer " />
          <GrSearch className="text-2xl cursor-pointer " />
        </div>
        
        {/* Tampilkan logo "LPK" hanya di halaman "About Us" pada versi mobile */}
        {isAboutUsPage && (
          <Link to="/about-us" className="block text-teal-600 md:hidden">
            <span className="sr-only">Home</span>
            <img src="/images/LPK.webp" width="160px" height="auto" alt="LPK-logo" />
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navigation;
