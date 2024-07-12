import { Link as RouterLink } from 'react-router-dom';
import * as React from 'react';

import { cn } from 'lib/utils';

export type UnstyledLinkProps = {
  to: string; // Menggunakan prop 'to' untuk menentukan rute dalam react-router-dom
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
} & React.ComponentPropsWithRef<'a'>;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, to, openNewTab, className, ...rest }, ref) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : to && !to.startsWith('/') && !to.startsWith('#');

    if (!isNewTab) {
      return (
        <RouterLink
          to={to}
          ref={ref}
          className={className}
          {...rest}
        >
          {children}
        </RouterLink>
      );
    }

    return (
      <a
        ref={ref}
        target='_blank'
        rel='noopener noreferrer'
        href={to}
        {...rest}
        className={cn('cursor-newtab', className)}
      >
        {children}
      </a>
    );
  }
);

export default UnstyledLink;
