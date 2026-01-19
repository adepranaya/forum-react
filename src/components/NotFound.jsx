import { Link } from 'react-router';
import HeadingApp from './HeadingApp';

export default function NotFound({ title = 'Page Not Found' }) {
  return (
    <div>
      <HeadingApp className="mb-4">{title}</HeadingApp>
      <p>
        Go to <Link to="/" className="text-primary underline">Home Page</Link>.
      </p>
    </div>
  );
}
