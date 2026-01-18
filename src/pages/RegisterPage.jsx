import { useDispatch } from 'react-redux';
import FormRegister from '../components/FormRegister';
import { useNavigate } from 'react-router';
import { asyncRegisterUser } from '../states/users/action.js';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = async ({ name, email, password }) => {
    await dispatch(asyncRegisterUser({ name, email, password })).then(() => {
      navigate('/');
    });
  };
  return <FormRegister submit={onRegister} />;
}
