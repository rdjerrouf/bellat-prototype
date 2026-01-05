import React from 'react';
import { clsx } from 'clsx';

// Define the props for the Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'primary', ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantClasses = {
      primary:
        'bg-bellat-red text-white hover:bg-bellat-red-dark focus:ring-bellat-red min-h-[48px] px-6 py-3',
      secondary:
        'bg-white text-bellat-red border-2 border-bellat-red hover:bg-bellat-gray-light focus:ring-bellat-red min-h-[48px] px-6 py-3',
      icon: 'bg-white border border-gray-200 rounded-full w-11 h-11 hover:bg-bellat-gray-light focus:ring-gray-400',
    };

    return (
      <button
        className={clsx(baseClasses, variantClasses[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
