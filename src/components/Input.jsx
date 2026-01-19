import PropTypes from 'prop-types';
function Input({
  as = 'input',
  label,
  id,
  preIcon,
  postIcon,
  type,
  placeholder,
  value,
  onChange,
}) {
  const baseClassName = `w-full ${
    preIcon ? 'pl-12' : 'pl-4'
  } pr-4 ${as === 'textarea' ? 'py-3 min-h-25' : 'h-12'} rounded-lg border border-slate-200 dark:border-[#3b4754] bg-white dark:bg-[#1b2127] text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-[#9cabba]`;

  const Component = as;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className="text-slate-700 dark:text-slate-300 text-sm font-medium"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {preIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {preIcon}
          </div>
        )}
        <Component
          id={id}
          className={baseClassName}
          placeholder={placeholder}
          type={as === 'input' ? type || 'text' : undefined}
          value={value}
          onChange={onChange}
        />
        {postIcon}
      </div>
    </div>
  );
}

Input.propTypes = {
  as: PropTypes.oneOf(['input', 'textarea']),
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  preIcon: PropTypes.node,
  postIcon: PropTypes.node,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;