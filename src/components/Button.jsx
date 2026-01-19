import PropTypes from 'prop-types';
import { cn } from '../utils/cn';

function Button({
  type = 'button',
  className = '',
  onClick,
  children,
}) {
  const baseStyles =
    'flex cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all';

  return (
    <button className={cn(baseStyles, className)} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Button;