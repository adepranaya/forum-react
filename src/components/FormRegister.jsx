import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import Button from './Button';
import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import Input from './Input';
import useTogglePw from '../hooks/useTogglePw';
import TogglePwIcon from './TogglePwIcon';

function FormRegister({ submit }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [showPw, onToggle] = useTogglePw(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default page refresh
    submit({ name, email, password });
  };
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Input
        id="name"
        preIcon={<User size={18} />}
        label="Name"
        placeholder="dev@example.com"
        type="name"
        value={name}
        onChange={onNameChange}
      />
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
        Sign Up
        <ArrowRight
          size={18}
          strokeWidth={3}
          className="group-hover:translate-x-1 transition-transform"
        />
      </Button>
    </form>
  );
}

FormRegister.propTypes = {
  login: PropTypes.func.isRequired,
};
export default FormRegister;
