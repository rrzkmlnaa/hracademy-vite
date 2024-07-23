import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'utils'

export type ButtonProps = {
  text: string
  type: 'button' | 'submit' | 'link'
  to?: string
  color?: 'primary' | 'warning' | 'error'
  rounded?: boolean
  action?: () => void
}

const colorObj = {
  primary: {
    background: 'bg-[#1075b8]',
    foreground: 'text-[#fff]',
    active: 'active:bg-[#2081ff]'
  },
  warning: {
    background: 'bg-[#fef148]',
    foreground: 'text-[#0c4a6e]',
    active: ''
  },
  error: {
    background: 'bg-[#ff4d4f]',
    foreground: 'text-[#fff]',
    active: 'active:bg-[#ff7875]'
  },
  black: {
    background: 'bg-[#000000]',
    foreground: 'text-[#fff]',
    active: 'active:bg-[#333333]'
  }
}

const Button = ({
  text,
  type,
  to,
  color = 'primary',
  rounded,
  action
}: ButtonProps) => {
  const colorStyles = colorObj[color] || {}
  const { background = '', foreground = '', active = '' } = colorStyles

  if (type === 'link') {
    return (
      <Link
        className={classNames(
          'group relative inline-flex items-center overflow-hidden px-8 py-3 focus:outline-none focus:ring',
          background,
          foreground,
          active,
          rounded ? 'rounded' : ''
        )}
        to={to ?? '#!'}
      >
        <span className="absolute -start-full transition-all group-hover:start-4">
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>

        <span className="text-sm font-semibold transition-all group-hover:ms-4">
          {text}
        </span>
      </Link>
    )
  }

  return (
    <button
      className={classNames(
        'group relative inline-flex items-center overflow-hidden px-8 py-3 focus:outline-none focus:ring',
        background,
        foreground,
        active,
        rounded ? 'rounded' : ''
      )}
      type={type}
      onClick={action}
    >
      <span className="absolute -start-full transition-all group-hover:start-4">
        <svg
          className="size-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>

      <span className="text-sm font-medium transition-all group-hover:ms-4">
        {text}
      </span>
    </button>
  )
}

export default Button
