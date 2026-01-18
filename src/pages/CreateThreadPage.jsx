import { useDispatch } from 'react-redux';
import FormCreateThread from '../components/FormCreateThread';
import HeadingApp from '../components/HeadingApp';
import { asyncAddThread } from '../states/threads/action';
import { useNavigate } from 'react-router';

export default function CreateThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = async ({ title, category, body }) => {
    await dispatch(asyncAddThread({ title, category, body }));
    navigate('/');
  };
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <HeadingApp>Create Thread</HeadingApp>
      </div>
      <FormCreateThread submit={onAddThread} />
    </>
  );
}
