import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router';
import Button from './Button';
import { LogIn, LogOut } from 'lucide-react';

function UserActions({ onSignOut }) {
  const { authUser = null } = useSelector((states) => states);

  const navigate = useNavigate();
  function navToSignin() {
    navigate('/login');
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
          <NavLink
            to="/profile"
            className="hidden sm:flex items-center gap-3 pl-2"
          >
            <div className="text-right ">
              <p className="text-xs font-semibold">{authUser.name}</p>
              <p className="text-[10px] text-slate-500">{authUser.email}</p>
            </div>
            <img
              src={authUser.avatar}
              className="size-10 rounded-full border-2 border-primary/20"
              alt="User profile avatar portrait"
            ></img>
          </NavLink>
          <Button onClick={onSignOut}>
            <span className="hidden sm:block">Sign Out </span>
            <LogOut className="sm:ms-2" />
          </Button>
        </>
      )}
    </div>
  );
}

export default UserActions;
