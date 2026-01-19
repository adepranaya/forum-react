import PropTypes from 'prop-types';
import { NavLink } from 'react-router';
import Button from './Button';
import useInput from '../hooks/useInput';

function CommentInput({ authUser, submit }) {
  const [content, onContentChange] = useInput('');
  const { avatar } = authUser || {};
  if (authUser === null) {
    return (
      <p className="ms-2">
        <NavLink to="/login" className="text-primary underline">
          Login
        </NavLink>{' '}
        to comment
      </p>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default page refresh
    submit({ content });
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="size-10 rounded-full overflow-hidden shrink-0">
            <img
              alt="Logged in user avatar"
              className="w-full h-full object-cover"
              data-alt="User profile avatar small"
              src={avatar}
            />
          </div>
          <div className="flex-1">
            <textarea
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary min-h-25 placeholder:text-slate-500"
              placeholder="What are your thoughts?"
              value={content}
              onChange={onContentChange}
            />
            <div className="flex justify-end mt-3">
              <Button type="submit">Post Comment</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
const authUserShape = {
  avatar: PropTypes.string.isRequired,
};

CommentInput.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  submit: PropTypes.func.isRequired,
};
export default CommentInput;
