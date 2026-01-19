import React from 'react';
import { cn } from '../utils/cn';

function HeadingApp({ className, children }) {
  const baseStyles = 'text-2xl font-bold';
  return <h1 className={cn(baseStyles, className)}>{children}</h1>;
}

export default HeadingApp;
