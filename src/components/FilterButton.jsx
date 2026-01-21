import PropTypes from 'prop-types';
function FilterButton({ active = false, onClick, children }) {
  return (
    <button
      className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-colors whitespace-nowrap  text-sm font-medium ${
        active
          ? 'bg-primary text-white hover:bg-primary/90'
          : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
FilterButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterButton;
