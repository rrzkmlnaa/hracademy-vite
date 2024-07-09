/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-children-prop */
/* eslint-disable tailwindcss/classnames-order */
import React, { useEffect, useState } from 'react'
import { NavigationTypes, navigations } from 'constant/navigations'
import { Link } from 'react-router-dom'
import { classNames } from 'utils'

const Dropdown = ({ name, children, path }: NavigationTypes) => {
  return (
    <div className="group inline-block dropdown">
      <Link
        to={path ?? '#!'}
        className="flex w-fit items-center rounded-sm bg-white px-3 py-1 outline-none focus:outline-none"
      >
        <span className="flex-1 pr-1 text-primary text-[16px]">{name}</span>
        {children && (
          <span>
            <svg
              className="size-4 fill-current transition duration-150 ease-in-out
        group-hover:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        )}
      </Link>
      <ul
        className="absolute min-w-32 origin-top scale-0 rounded-sm border bg-white 
  transition duration-150 ease-in-out group-hover:scale-100"
      >
        {children?.map((childItem: NavigationTypes) => {
          if (!childItem.children) {
            return (
              <li
                className="rounded-sm px-3 py-1 hover:bg-gray-100"
                key={childItem.name}
              >
                <Link
                  to={childItem.path ?? '#!'}
                  className="flex w-fit items-center rounded-sm px-3 py-1 outline-none focus:outline-none"
                >
                  {childItem.name}
                </Link>
              </li>
            )
          }

          return (
            <li
              className="relative rounded-sm px-3 py-1 hover:bg-gray-100"
              key={childItem.name}
            >
              <Link
                to={childItem.path ?? '#!'}
                className="w-full text-left flex items-center px-3 py-1 outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">{childItem.name}</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current size-4 transition
                duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </Link>
              <ul
                className="absolute right-0 top-0 min-w-32 origin-top-left rounded-sm 
border bg-white transition duration-150
ease-in-out
"
              >
                {childItem.children.map((nestedChildItem: NavigationTypes) => (
                  <li
                    className="px-3 py-1 hover:bg-gray-100"
                    key={nestedChildItem.name}
                  >
                    <Link
                      to={nestedChildItem.path ?? '#!'}
                      className="flex w-fit items-center rounded-sm px-3 py-1 outline-none focus:outline-none"
                    >
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
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 10)
    })
  })

  return (
    <header
      className={classNames(
        'bg-white py-3',
        scroll ? 'sticky-navbar shadow z-50' : null
      )}
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="block text-teal-600">
          <span className="sr-only">Home</span>
          <img
            src="/images/appLogo.webp"
            width="160px"
            height="auto"
            alt="app-logo"
          />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-1 text-sm ">
              {navigations.map((navItem: NavigationTypes) => (
                <li key={navItem.name}>
                  <Dropdown
                    name={navItem.name}
                    children={navItem.children}
                    path={navItem.path}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navigation
