import { Eye, EyeOff } from 'lucide-react';
import PropTypes from 'prop-types';

function TogglePwIcon({ onClick, showPw }) {
  return (
    <button
      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
      type="button"
      onClick={onClick}
    >
      {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  );
}

TogglePwIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  showPw: PropTypes.bool.isRequired,
};

export default TogglePwIcon;
