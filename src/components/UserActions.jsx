import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router';
import Button from './Button';
import { LogIn, LogOut, Moon, Sun } from 'lucide-react';
import PropTypes from 'prop-types';
import { setTheme } from '../states/theme/action';

function UserActions({ onSignOut }) {
  const { authUser = null, theme = 'light' } = useSelector((states) => states);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function navToSignin() {
    navigate('/login');
  }

  function handleThemeToggle() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  }

  return (
    <div className="flex items-center gap-4">
      {authUser === null ? (
        <Button onClick={navToSignin}>
          <span className="hidden sm:block">Sign In</span>
          <LogIn className="sm:ms-2" />
        </Button>
      ) : (
        <>
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              checked={theme === 'dark'}
              onChange={handleThemeToggle}
            />
            <Sun className="swap-on" />
            <Moon className="swap-off" />
          </label>
          <div className="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <img
                src={authUser.avatar}
                className="size-10 rounded-full border-2 border-primary/20"
                alt="User profile avatar portrait"
              ></img>
            </div>
            <ul
              tabindex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <button onClick={onSignOut}>Sign Out</button>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

UserActions.propTypes = {
  onSignOut: PropTypes.func.isRequired,
};

export default UserActions;
