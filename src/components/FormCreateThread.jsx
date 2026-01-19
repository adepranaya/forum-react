import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import Button from './Button';
import { ArrowRight, Mail } from 'lucide-react';
import Input from './Input';

function FormCreateThread({ submit }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default page refresh
    submit({ title, category, body });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Input
        id="title"
        label="Title"
        placeholder="Title"
        type="title"
        value={title}
        onChange={onTitleChange}
      />
      <Input
        id="category"
        label="Category"
        placeholder="Category"
        type="category"
        value={category}
        onChange={onCategoryChange}
      />
      <Input
        id="body"
        as='textarea'
        label="Body"
        placeholder="Body"
        type="body"
        value={body}
        onChange={onBodyChange}
      />

      <Button
        type="submit"
        className="w-full font-bold py-3 px-4 shadow-lg shadow-primary/20 h-auto text-base gap-2 group flex items-center"
      >
        Post Thread
      </Button>
    </form>
  );
}

FormCreateThread.propTypes = {
  submit: PropTypes.func.isRequired,
};
export default FormCreateThread;
