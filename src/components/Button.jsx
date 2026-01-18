import { cn } from '../utils/cn';

export default function Button({ type, className, onClick, children }) {
  const baseStyles =
    'flex cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all';

  return (
    <button className={cn(baseStyles, className)} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
