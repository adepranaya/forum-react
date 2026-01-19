import { useDispatch } from 'react-redux';
import FormRegister from '../components/FormRegister';
import { useNavigate } from 'react-router';
import { asyncRegisterUser } from '../states/users/action.js';
import { asyncSetAuthUser } from '../states/authUser/action.js';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = async ({ name, email, password }) => {
    try {
      await dispatch(asyncRegisterUser({ name, email, password }));
      await dispatch(asyncSetAuthUser({ email, password }));
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  return <FormRegister submit={onRegister} />;
}
