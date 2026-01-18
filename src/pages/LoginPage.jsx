import { ChartLine, MessageCircle } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router';
import FormLogin from '../components/FormLogin';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = async ({ email, password }) => {
    await dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };
  return <FormLogin submit={onLogin} />;
}
