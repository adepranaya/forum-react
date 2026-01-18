import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import Button from './Button';
import { ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import Input from './Input';
import useTogglePw from '../hooks/useTogglePw';
import TogglePwIcon from './TogglePwIcon';

function FormCreateThread({ submit }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [showPw, onToggle] = useTogglePw(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default page refresh
    submit({ email, password });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Input
        id="email"
        preIcon={<Mail size={18} />}
        label="Email Address"
        placeholder="dev@example.com"
        type="email"
        value={email}
        onChange={onEmailChange}
      />
      <Input
        id="password"
        preIcon={<Lock size={18} />}
        postIcon={<TogglePwIcon onClick={onToggle} showPw={showPw} />}
        label="Password"
        placeholder="••••••••"
        type={showPw ? 'text' : 'password'}
        value={password}
        onChange={onPasswordChange}
      />

      <Button
        type="submit"
        className="w-full font-bold py-3 px-4 shadow-lg shadow-primary/20 h-auto text-base gap-2 group flex items-center"
      >
        Sign In
        <ArrowRight
          size={18}
          strokeWidth={3}
          className="group-hover:translate-x-1 transition-transform"
        />
      </Button>
    </form>
  );
}

FormCreateThread.propTypes = {
  login: PropTypes.func.isRequired,
};
export default FormCreateThread;
