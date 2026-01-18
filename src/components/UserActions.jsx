import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from './Button';

function UserActions({ onSignOut }) {
  const { authUser = null } = useSelector((states) => states);

  const navigate = useNavigate();
  function navToSignin() {
    navigate('/login');
  }
  return (
    <div className="flex items-center gap-4">
      {authUser === null ? (
        <Button onClick={navToSignin}>Sign In</Button>
      ) : (
        <>
          <button className="flex items-center gap-3 pl-2">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-semibold">{authUser.name}</p>
              <p className="text-[10px] text-slate-500">{authUser.email}</p>
            </div>
            <div
              className="size-10 rounded-full bg-cover bg-center border-2 border-primary/20"
              data-alt="User profile avatar portrait"
              style={{
                backgroundImage: `url(${authUser.avatar})`,
              }}
            ></div>
          </button>
          <Button onClick={onSignOut}>Sign Out</Button>
        </>
      )}
    </div>
  );
}

export default UserActions;
